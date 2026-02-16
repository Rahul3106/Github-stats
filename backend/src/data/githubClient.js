import axios from 'axios';
import { cache } from '../utils/cache.js';

const GITHUB_API_BASE = 'https://api.github.com';

class GitHubClient {
  constructor() {
    this.token = process.env.GITHUB_TOKEN;
    this.axiosInstance = axios.create({
      baseURL: GITHUB_API_BASE,
      headers: this.token ? { Authorization: `token ${this.token}` } : {},
    });
  }

  async getUserRepos(username) {
    const cacheKey = `repos_${username}`;
    const cached = cache.get(cacheKey);
    if (cached) {
      return cached;
    }

    try {
      const repos = [];
      let page = 1;
      let hasMore = true;

      while (hasMore) {
        const response = await this.axiosInstance.get(`/users/${username}/repos`, {
          params: {
            per_page: 100,
            page,
            type: 'public',
          },
        });

        if (response.data.length === 0) {
          hasMore = false;
        } else {
          repos.push(...response.data);
          page++;
          // If we got less than 100, it's the last page
          if (response.data.length < 100) {
            hasMore = false;
          }
        }
      }

      cache.set(cacheKey, repos, 300);
      return repos;
    } catch (error) {
      if (error.response?.status === 404) {
        const err = new Error('GitHub user not found');
        err.statusCode = 404;
        err.code = 'USER_NOT_FOUND';
        throw err;
      }
      if (error.response?.status === 403) {
        const err = new Error('GitHub API rate limit exceeded. Please try again later.');
        err.statusCode = 429;
        err.code = 'RATE_LIMIT_EXCEEDED';
        throw err;
      }
      throw error;
    }
  }

  async getRepoLanguages(owner, repo) {
    const cacheKey = `languages_${owner}_${repo}`;
    const cached = cache.get(cacheKey);
    if (cached) {
      return cached;
    }

    try {
      const response = await this.axiosInstance.get(`/repos/${owner}/${repo}/languages`);
      cache.set(cacheKey, response.data, 300);
      return response.data;
    } catch (error) {
      console.error(`Failed to fetch languages for ${owner}/${repo}:`, error.message);
      return {};
    }
  }
}

export const githubClient = new GitHubClient();
