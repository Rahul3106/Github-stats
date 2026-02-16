import { useState } from 'react';

function UsernameInput({ onAnalyze, loading, error }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onAnalyze(username.trim());
    }
  };

  return (
    <div className="username-input-container">
      <h1>📊 GitHub Language Analytics</h1>
      <p className="subtitle">Analyze programming language usage from any GitHub profile</p>
      
      <form onSubmit={handleSubmit} className="search-form">
        <div className="input-group">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username (e.g., Rahul3106)"
            className="username-input"
            disabled={loading}
            aria-label="GitHub username"
          />
          <button 
            type="submit" 
            className="analyze-button"
            disabled={loading || !username.trim()}
          >
            {loading ? '🔄 Analyzing...' : '🔍 Analyze'}
          </button>
        </div>
      </form>

      {error && (
        <div className="error-message" role="alert">
          <span className="error-icon">⚠️</span>
          <div>
            <strong>{error.code || 'ERROR'}:</strong> {error.message}
          </div>
        </div>
      )}
    </div>
  );
}

export default UsernameInput;
