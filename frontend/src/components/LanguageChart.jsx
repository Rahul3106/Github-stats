import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function LanguageChart({ languages }) {
  if (!languages || Object.keys(languages).length === 0) {
    return (
      <div className="chart-container">
        <h2>Language Distribution</h2>
        <p className="no-data">No language data available</p>
      </div>
    );
  }

  const sortedLanguages = Object.entries(languages)
    .sort((a, b) => b[1] - a[1]);

  const labels = sortedLanguages.map(([lang]) => lang);
  const dataValues = sortedLanguages.map(([, percentage]) => percentage);

  // Color palette for different languages
  const colors = [
    '#0366d6', '#28a745', '#ffd33d', '#f1e05a', '#e34c26',
    '#563d7c', '#b07219', '#3572a5', '#89e051', '#199f4b',
    '#f34b7d', '#00ADD8', '#178600', '#384d54', '#a97bff'
  ];

  const data = {
    labels,
    datasets: [
      {
        label: 'Language Usage (%)',
        data: dataValues,
        backgroundColor: colors.slice(0, labels.length),
        borderColor: '#ffffff',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          padding: 15,
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.parsed || 0;
            return `${label}: ${value.toFixed(1)}%`;
          },
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <h2>Language Distribution</h2>
      <div className="chart-wrapper">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}

export default LanguageChart;
