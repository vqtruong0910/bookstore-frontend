import { Pie } from "react-chartjs-2";

function PieChart({ chartData }) {
    return (
        <Pie data={chartData} options={{}} />
    );
}

export default PieChart;