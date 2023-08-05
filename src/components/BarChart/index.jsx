import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { useTranslation } from 'react-i18next'

function BarChart({ chartData }) {
  const { t } = useTranslation()
  const options = {
    scales: {
      xAxes: {
        display: false,
      },
      yAxes: {
        // beginAtZero: true,
        // ticks: {
        //     beginAtZero: true
        // }
      },
    },
    interaction: {
      intersect: false,
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: t('Biểu đồ cột thể hiện top 10 sản phẩm bán chạy trong tuần'),
      },
    },
    layout: {
      autoPadding: true,
    },
    maintainAspectRatio: false,
    // tension: 0.1
  }
  return <Bar data={chartData} options={options} />
}

export default BarChart
