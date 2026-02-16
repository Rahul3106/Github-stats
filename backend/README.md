# 🔧 Language Analytics Backend

Express.js API server for analyzing GitHub user language statistics.

## 🏗️ Architecture

### Layers

1. **Data Layer** (`src/data/`)
   - `githubClient.js`: GitHub REST API integration with pagination and caching

2. **Service Layer** (`src/services/`)
   - `languageAnalyzer.js`: Business logic for aggregating and analyzing language data

3. **Controller Layer** (`src/controllers/`)
   - `analyzeController.js`: Request handling and validation

4. **API Layer** (`src/routes/`)
   - `analyzeRoutes.js`: API endpoint definitions

5. **Utils** (`src/utils/`)
   - `cache.js`: In-memory caching system
   - `errorHandler.js`: Centralized error handling middleware

## 📋 API Documentation

### Endpoints

#### `POST /api/analyze/github`

Analyzes a GitHub user's language usage across all public repositories.

**Request Body:**
```json
{
  "username": "Rahul3106"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "username": "Rahul3106",
    "totalRepos": 15,
    "languages": {
      "JavaScript": 42.5,
      "Python": 28.3,
      "TypeScript": 15.2
    },
    "topLanguages": ["JavaScript", "Python", "TypeScript"],
    "repoBreakdown": [
      {
        "name": "awesome-project",
        "url": "https://github.com/Rahul3106/awesome-project",
        "languages": {
          "JavaScript": 75.0,
          "CSS": 25.0
        }
      }
    ]
  }
}
```

**Error Response (400/404/429):**
```json
{
  "success": false,
  "error": {
    "message": "GitHub user not found",
    "code": "USER_NOT_FOUND"
  }
}
```

#### `GET /health`

Health check endpoint.

**Response (200):**
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## 🚀 Setup

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# (Optional) Add GitHub token to .env for higher rate limits
# Edit .env and add: GITHUB_TOKEN=your_token_here
```

### Running the Server

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:5000` (or the port specified in `.env`).

## 🔑 Environment Variables

- `PORT`: Server port (default: 5000)
- `GITHUB_TOKEN`: Optional GitHub personal access token for higher API rate limits

## 🧪 Testing the API

### Using curl:

```bash
# Analyze a GitHub user
curl -X POST http://localhost:5000/api/analyze/github \
  -H "Content-Type: application/json" \
  -d '{"username": "Rahul3106"}'

# Health check
curl http://localhost:5000/health
```

## 📊 Features

- ✅ Pagination support for users with many repositories
- ✅ In-memory caching (5-minute TTL) to reduce API calls
- ✅ Comprehensive error handling
- ✅ GitHub API rate limit detection
- ✅ Percentage-based language statistics
- ✅ Repository-wise language breakdown

## 🛡️ Error Codes

- `INVALID_USERNAME`: Missing or empty username
- `INVALID_USERNAME_FORMAT`: Username contains invalid characters
- `USER_NOT_FOUND`: GitHub user does not exist
- `RATE_LIMIT_EXCEEDED`: GitHub API rate limit reached
- `INTERNAL_ERROR`: Server error

## 📝 Notes

- Without a GitHub token, you're limited to 60 requests/hour
- With a token, limit increases to 5,000 requests/hour
- Responses are cached for 5 minutes to improve performance
- Only public repositories are analyzed
