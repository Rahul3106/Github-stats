# 📊 Language Usage Analytics App

A professional full-stack web application that analyzes programming language usage from GitHub profiles and displays percentage-based statistics through an interactive React dashboard.

## 🌟 Overview

This application demonstrates senior-level full-stack development skills with clean architecture, separation of concerns, and production-ready code quality. It fetches data from GitHub's REST API, processes language statistics across all repositories, and presents them through a beautiful, responsive interface.

## 🛠️ Tech Stack

### Backend
- **Node.js + Express.js**: RESTful API server
- **GitHub REST API**: Data source integration with pagination
- **Axios**: HTTP client for API requests
- **In-memory caching**: Performance optimization (5-minute TTL)
- **Clean Architecture**: Layered design (Data → Service → Controller → Routes)

### Frontend
- **React 18**: Modern component-based UI
- **Vite**: Fast build tool with HMR
- **Chart.js + react-chartjs-2**: Interactive pie chart visualizations
- **Axios**: Backend API communication
- **CSS3**: Professional, responsive styling

## 📁 Project Structure

```
Github-stats/
│
├── README.md                    # This file
│
├── backend/                     # Express.js API server
│   ├── src/
│   │   ├── routes/
│   │   │   └── analyzeRoutes.js        # API endpoint definitions
│   │   ├── controllers/
│   │   │   └── analyzeController.js    # Request handling & validation
│   │   ├── services/
│   │   │   └── languageAnalyzer.js     # Business logic
│   │   ├── data/
│   │   │   └── githubClient.js         # GitHub API client
│   │   ├── utils/
│   │   │   ├── errorHandler.js         # Error middleware
│   │   │   └── cache.js                # Caching system
│   │   └── app.js                      # Express server setup
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   └── README.md
│
└── frontend/                    # React dashboard
    ├── src/
    │   ├── components/
    │   │   ├── UsernameInput.jsx       # Search input form
    │   │   ├── LanguageChart.jsx       # Pie chart visualization
    │   │   ├── RepoList.jsx            # Repository list
    │   │   └── StatsOverview.jsx       # Summary statistics
    │   ├── pages/
    │   │   └── Dashboard.jsx           # Main page
    │   ├── services/
    │   │   └── api.js                  # API client
    │   ├── App.jsx                     # Root component
    │   ├── App.css                     # Global styles
    │   └── main.jsx                    # Entry point
    ├── public/
    ├── index.html
    ├── .env.example
    ├── .gitignore
    ├── package.json
    ├── vite.config.js
    └── README.md
```

## 🎯 Features

### Core Functionality
- ✅ Analyze any GitHub user's public repositories
- ✅ Calculate language percentages across all repos
- ✅ Interactive pie chart with color-coded segments
- ✅ Repository-wise language breakdown with percentage bars
- ✅ Top 3 languages ranking
- ✅ Total repository and language counts

### Technical Features
- ✅ Clean architecture with strict separation of concerns
- ✅ Response caching to minimize API calls
- ✅ Pagination support for users with many repos
- ✅ Comprehensive error handling with user-friendly messages
- ✅ Loading states and animations
- ✅ Fully responsive design (desktop, tablet, mobile)
- ✅ Accessibility features (ARIA labels)
- ✅ Professional UI/UX with smooth transitions

## 🚀 Quick Start

### Prerequisites
- Node.js 16 or higher
- npm or yarn
- (Optional) GitHub Personal Access Token for higher API rate limits

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# (Optional) Add GitHub token to .env for higher rate limits
# Edit .env and add: GITHUB_TOKEN=your_token_here

# Start development server
npm run dev
```

Backend will run on `http://localhost:5000`

### Frontend Setup

```bash
# Navigate to frontend directory (in a new terminal)
cd frontend

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# (Optional) Update API URL in .env if backend is not on localhost:5000

# Start development server
npm run dev
```

Frontend will run on `http://localhost:5173`

### Access the Application

1. Open your browser to `http://localhost:5173`
2. Enter any GitHub username (e.g., "Rahul3106")
3. Click "🔍 Analyze" to see the results
4. View language distribution, statistics, and repository breakdowns

## 📡 API Documentation

### Endpoints

#### `POST /api/analyze/github`
Analyzes a GitHub user's language usage.

**Request:**
```json
{
  "username": "Rahul3106"
}
```

**Response:**
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
    "repoBreakdown": [...]
  }
}
```

#### `GET /health`
Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## 🎨 UI/UX Design

### Color Palette
- **Primary**: #0366d6 (GitHub blue)
- **Success**: #28a745 (green)
- **Error**: #d73a49 (red)
- **Background**: Gradient purple (#667eea → #764ba2)
- **Cards**: #ffffff (white)
- **Text**: #24292e (dark gray)
- **Borders**: #e1e4e8 (light gray)

### Design Principles
- Clean, modern interface inspired by GitHub's design
- Smooth animations and transitions
- Responsive layout adapting to all screen sizes
- Accessible with proper ARIA labels
- Professional typography and spacing
- Intuitive user flow

## 🔧 Configuration

### Backend Environment Variables
```env
PORT=5000                          # Server port
GITHUB_TOKEN=your_token_here       # Optional: GitHub API token
```

### Frontend Environment Variables
```env
VITE_API_URL=http://localhost:5000  # Backend API URL
```

## 🧪 Testing

### Test Backend API
```bash
# Health check
curl http://localhost:5000/health

# Analyze a user
curl -X POST http://localhost:5000/api/analyze/github \
  -H "Content-Type: application/json" \
  -d '{"username": "Rahul3106"}'
```

### Test Frontend
1. Open `http://localhost:5173` in your browser
2. Enter a GitHub username
3. Verify all components render correctly
4. Test error handling with invalid username
5. Check responsive design on different screen sizes

## 📊 Architecture Highlights

### Backend Layers
1. **Data Layer**: Raw GitHub API communication
2. **Service Layer**: Business logic and data transformation
3. **Controller Layer**: Request validation and response formatting
4. **API Layer**: Route definitions and middleware
5. **Utils**: Reusable utilities (caching, error handling)

### Frontend Structure
1. **Services**: API communication layer
2. **Components**: Reusable UI components
3. **Pages**: Page-level composition
4. **Styles**: Global and component styling

## 🛡️ Error Handling

### Backend Error Codes
- `INVALID_USERNAME`: Missing or empty username
- `INVALID_USERNAME_FORMAT`: Username format invalid
- `USER_NOT_FOUND`: GitHub user doesn't exist
- `RATE_LIMIT_EXCEEDED`: API rate limit reached
- `INTERNAL_ERROR`: Server error

### Frontend Error Display
All errors are displayed with:
- Clear error icon
- Error code
- User-friendly message
- Suggestions for resolution

## 📈 Performance

- **Caching**: 5-minute TTL reduces redundant API calls
- **Pagination**: Handles users with hundreds of repositories
- **Lazy Loading**: Chart components load on demand
- **Optimized Builds**: Vite's production build with code splitting

## 🔒 Security

- No sensitive data stored
- GitHub tokens optional and kept in .env
- CORS configured for cross-origin requests
- Input validation on all endpoints
- Error messages don't expose internal details

## 📝 Development Notes

### Rate Limits
- **Without token**: 60 requests/hour
- **With token**: 5,000 requests/hour
- Caching helps minimize API calls

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript required
- No IE11 support

## 🤝 Contributing

This is a portfolio project demonstrating full-stack development skills. Feel free to:
- Fork the repository
- Submit issues
- Propose improvements
- Use as a learning reference

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💻 Developer

Built with ❤️ to demonstrate:
- Clean architecture principles
- Modern full-stack development
- Professional code quality
- Production-ready patterns
- Comprehensive documentation

---

**Happy Coding!** 🚀