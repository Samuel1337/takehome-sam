import Chart from 'chart.js/auto';
import "./solanaChart.scss";

function SolanaChart(props) {

    window.onload = function() {
        renderChart();
     }

    function renderChart() {
        const labels = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
          ];
        
          const data = {
            labels: labels,
            datasets: [{
              label: 'My First dataset',
              backgroundColor: '#859e8f',
              borderColor: '#abd0a3',
              data: [0, 10, 5, 2, 20, 30, 45],
            }]
          };
        
          const config = {
            type: 'bar',
            data: data,
            options: {
                responsive: true,
                scales: {
                    yAxes: {
                        beginAtZero: true
                    }
                }
            }
          };

          const myChart = new Chart(
            document.getElementById('myChart'),
            config
          );
    }

    return (
        <div className="solana-chart">
            <div className="chart-container">
                <canvas id="myChart" width="600" height="400"></canvas>
            </div>
        </div>
    )
}

export default SolanaChart;