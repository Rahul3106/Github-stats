import { githubClient } from '../data/githubClient.js';

class LanguageAnalyzer {
  async analyzeUserLanguages(username) {
    // Get all repositories for the user
    const repos = await githubClient.getUserRepos(username);

    if (repos.length === 0) {
      return {
        username,
        totalRepos: 0,
        languages: {},
        topLanguages: [],
        repoBreakdown: [],
      };
    }

    // Fetch language data for each repository
    const languagePromises = repos.map(async (repo) => {
      const languages = await githubClient.getRepoLanguages(repo.owner.login, repo.name);
      return {
        name: repo.name,
        url: repo.html_url,
        languages,
      };
    });

    const repoLanguageData = await Promise.all(languagePromises);

    // Aggregate language statistics
    const totalLanguageBytes = {};
    
    repoLanguageData.forEach((repo) => {
      Object.entries(repo.languages).forEach(([lang, bytes]) => {
        totalLanguageBytes[lang] = (totalLanguageBytes[lang] || 0) + bytes;
      });
    });

    // Calculate total bytes
    const totalBytes = Object.values(totalLanguageBytes).reduce((sum, bytes) => sum + bytes, 0);

    // Convert to percentages
    const languagePercentages = {};
    if (totalBytes > 0) {
      Object.entries(totalLanguageBytes).forEach(([lang, bytes]) => {
        languagePercentages[lang] = parseFloat(((bytes / totalBytes) * 100).toFixed(1));
      });
    }

    // Get top languages (sorted by percentage)
    const topLanguages = Object.entries(languagePercentages)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([lang]) => lang);

    // Prepare repository breakdown with percentages
    const repoBreakdown = repoLanguageData
      .filter((repo) => Object.keys(repo.languages).length > 0)
      .map((repo) => {
        const repoTotal = Object.values(repo.languages).reduce((sum, bytes) => sum + bytes, 0);
        const repoPercentages = {};
        
        if (repoTotal > 0) {
          Object.entries(repo.languages).forEach(([lang, bytes]) => {
            repoPercentages[lang] = parseFloat(((bytes / repoTotal) * 100).toFixed(1));
          });
        }

        return {
          name: repo.name,
          url: repo.url,
          languages: repoPercentages,
        };
      });

    return {
      username,
      totalRepos: repos.length,
      languages: languagePercentages,
      topLanguages,
      repoBreakdown,
    };
  }
}

export const languageAnalyzer = new LanguageAnalyzer();
