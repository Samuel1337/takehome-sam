import Chart from 'chart.js/auto';
import React from 'react';
import "./solanaChart.scss";

class SolanaChart extends React.Component {
  	constructor(props) {
		super(props);
		
		this.chart = new Chart(
			document.getElementById('myChart'),
			this.props.config.chartConfig
		);
		
		this.renderChart = this.renderChart.bind(this);
	}

  	renderChart() {
		if (this.props.config.list.length === 0) { return null; }
		this.chart.destroy();
		
		this.chart = new Chart(
			document.getElementById('myChart'),
			this.props.config.chartConfig
		);
	}

	render() {
		return (
			<div className="solana-chart">
				<div className="chart-container">
					<canvas id="myChart" width="600" height="400"></canvas>
					{this.renderChart()}
				</div>
			</div>
		)
	}

}

export default SolanaChart;