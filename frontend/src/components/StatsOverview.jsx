function StatsOverview({ data }) {
  if (!data) return null;

  const { totalRepos, languages, topLanguages } = data;
  const totalLanguages = Object.keys(languages).length;

  return (
    <div className="stats-overview">
      <div className="stat-card">
        <div className="stat-icon">📚</div>
        <div className="stat-content">
          <div className="stat-value">{totalRepos}</div>
          <div className="stat-label">Total Repositories</div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">💻</div>
        <div className="stat-content">
          <div className="stat-value">{totalLanguages}</div>
          <div className="stat-label">Languages Used</div>
        </div>
      </div>

      <div className="stat-card top-languages">
        <div className="stat-icon">🏆</div>
        <div className="stat-content">
          <div className="stat-label">Top Languages</div>
          <div className="top-languages-list">
            {topLanguages.map((lang, index) => (
              <div key={lang} className="top-language-item">
                <span className="language-rank">{index + 1}.</span>
                <span className="language-name">{lang}</span>
                <span className="language-percentage">
                  {languages[lang].toFixed(1)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsOverview;
