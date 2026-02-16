function RepoList({ repoBreakdown }) {
  if (!repoBreakdown || repoBreakdown.length === 0) {
    return null;
  }

  return (
    <div className="repo-list-container">
      <h2>Repository Breakdown</h2>
      <div className="repo-list">
        {repoBreakdown.map((repo) => (
          <div key={repo.name} className="repo-card">
            <div className="repo-header">
              <h3 className="repo-name">
                <a 
                  href={repo.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="repo-link"
                >
                  📦 {repo.name}
                </a>
              </h3>
            </div>
            <div className="repo-languages">
              {Object.entries(repo.languages)
                .sort((a, b) => b[1] - a[1])
                .map(([lang, percentage]) => (
                  <div key={lang} className="language-bar-container">
                    <div className="language-bar-header">
                      <span className="language-bar-name">{lang}</span>
                      <span className="language-bar-percentage">
                        {percentage.toFixed(1)}%
                      </span>
                    </div>
                    <div className="language-bar-track">
                      <div 
                        className="language-bar-fill"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RepoList;
