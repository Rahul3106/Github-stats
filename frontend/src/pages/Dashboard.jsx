import { useState } from 'react';
import UsernameInput from '../components/UsernameInput';
import LanguageChart from '../components/LanguageChart';
import StatsOverview from '../components/StatsOverview';
import RepoList from '../components/RepoList';
import { analyzeGithubProfile } from '../services/api';

function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const handleAnalyze = async (username) => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await analyzeGithubProfile(username);
      if (response.success) {
        setData(response.data);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard">
      <UsernameInput 
        onAnalyze={handleAnalyze}
        loading={loading}
        error={error}
      />

      {loading && (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Fetching repository data...</p>
        </div>
      )}

      {data && !loading && (
        <div className="results-container">
          <div className="results-header">
            <h2>Results for <span className="username-highlight">@{data.username}</span></h2>
          </div>

          <StatsOverview data={data} />

          <div className="visualization-section">
            <LanguageChart languages={data.languages} />
          </div>

          <RepoList repoBreakdown={data.repoBreakdown} />
        </div>
      )}
    </div>
  );
}

export default Dashboard;
