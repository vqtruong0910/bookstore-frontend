import { Line } from "react-chartjs-2";

function LineChart({ chartData }) {
    const options = {
        elements: {
            point: {
                borderWidth: 0,
                backgroundColor: "rgba(0, 0, 0, 0)",
                hoverRadius: 5,
                hoverBackgroundColor: "#3730a3"
            },
        },
        scales: {
            xAxes: {
                display: false
            },
            yAxes: {
                display: false,
                ticks: {
                    beginAtZero: true
                }
            },
        },
        interaction: {
            intersect: false,
        },
        plugins: {
            legend: {
                display: false
            },
        },
        layout: {
            autoPadding: false
        },
        maintainAspectRatio: false,
        // tension: 0.1
    }
    return (
        <Line data={chartData} options={options} />
    );
}

export default LineChart;