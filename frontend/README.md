# 🎨 Language Analytics Frontend

React dashboard for visualizing GitHub user language statistics.

## 🏗️ Architecture

### Structure

```
src/
├── components/          # Reusable UI components
│   ├── UsernameInput.jsx   # Input form for GitHub username
│   ├── LanguageChart.jsx   # Pie chart visualization
│   ├── StatsOverview.jsx   # Statistics summary cards
│   └── RepoList.jsx        # Repository breakdown list
├── pages/               # Page components
│   └── Dashboard.jsx       # Main dashboard page
├── services/            # API communication
│   └── api.js              # Backend API client
├── App.jsx              # Root application component
├── App.css              # Global styles
└── main.jsx             # Application entry point
```

## 📦 Components

### UsernameInput
Input component for entering GitHub usernames.

**Props:**
- `onAnalyze`: Callback function when analysis is requested
- `loading`: Boolean indicating loading state
- `error`: Error object to display

**Features:**
- Form validation
- Loading state handling
- Error message display
- Accessible input field

### LanguageChart
Pie chart visualization using Chart.js.

**Props:**
- `languages`: Object with language percentages

**Features:**
- Interactive pie chart
- Color-coded language segments
- Percentage tooltips
- Responsive legend

### StatsOverview
Summary cards displaying key statistics.

**Props:**
- `data`: Complete analysis data object

**Features:**
- Total repositories count
- Total languages used
- Top 3 languages with percentages

### RepoList
List of repositories with language breakdowns.

**Props:**
- `repoBreakdown`: Array of repository objects

**Features:**
- Clickable repository links
- Language percentage bars
- Sorted by language usage
- Hover effects

### Dashboard
Main page orchestrating all components.

**Features:**
- State management
- API integration
- Loading states
- Error handling
- Results display

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

# Edit .env if backend is not on localhost:5000
# VITE_API_URL=http://your-backend-url
```

### Running the Application

```bash
# Development mode (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The application will start on `http://localhost:5173`.

## 🔑 Environment Variables

- `VITE_API_URL`: Backend API base URL (default: http://localhost:5000)

## 🎨 Design Features

### Color Palette
- Primary Blue: `#0366d6` (GitHub blue)
- Success Green: `#28a745`
- Error Red: `#d73a49`
- Background: Gradient purple `#667eea` to `#764ba2`
- Card Background: `#ffffff`
- Text: `#24292e`
- Border: `#e1e4e8`

### UI/UX Elements
- ✅ Smooth animations and transitions
- ✅ Loading spinners
- ✅ Error messages with helpful text
- ✅ Hover effects on interactive elements
- ✅ Responsive design (mobile-friendly)
- ✅ Accessibility (ARIA labels)
- ✅ Professional typography
- ✅ Clean, modern interface

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 768px - 481px
- **Mobile**: ≤ 480px

## 🔧 Dependencies

### Core
- `react`: ^18.2.0
- `react-dom`: ^18.2.0

### Data Visualization
- `chart.js`: ^4.4.0
- `react-chartjs-2`: ^5.2.0

### HTTP Client
- `axios`: ^1.6.0

### Build Tool
- `vite`: ^5.0.0
- `@vitejs/plugin-react`: ^4.2.0

## 🧪 Usage Example

```javascript
// The application flow:
1. User enters GitHub username in UsernameInput
2. Dashboard calls API via services/api.js
3. Loading spinner displays while fetching
4. Results populate StatsOverview, LanguageChart, and RepoList
5. User can analyze another profile by entering new username
```

## 🎯 Features

- ✅ Real-time GitHub profile analysis
- ✅ Interactive pie chart visualization
- ✅ Repository-wise language breakdown
- ✅ Top languages ranking
- ✅ Responsive design for all devices
- ✅ Professional error handling
- ✅ Loading states with spinners
- ✅ Clean, modern UI with smooth animations

## 📝 Notes

- Charts require backend API to be running
- Default backend URL is `http://localhost:5000`
- All API calls include error handling
- Components are modular and reusable
- Styles follow GitHub's design principles
