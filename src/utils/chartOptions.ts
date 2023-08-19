const chartOptions = {
	maintainAspectRatio: false,
	legend: {
		display: false,
	},
	tooltips: {
		enabled: false,
	},
	elements: {
		point: {
			radius: 0,
		},
		line: {
			tension: 0.4,
		},
	},
	responsive: true,
	plugins: {
		title: {
			display: false,
		},
		legend: {
			display: false,
		},
	},
	scales: {
		x: {
			display: false,
			border: {
				display: false,
			},
			grid: {
				display: false,
				drawOnChartArea: false,
				drawTicks: false,
			},
		},
		y: {
			display: false,
			border: {
				display: false,
			},
			grid: {
				display: false,
				drawOnChartArea: false,
				drawTicks: false,
			},
			// the data minimum used for determining the ticks is Math.min(dataMin, suggestedMin)
			suggestedMin: 1,

			// the data maximum used for determining the ticks is Math.max(dataMax, suggestedMax)
			suggestedMax: 5,
		},
	},
	layout: {
		padding: {
			top: 1,
		},
	},
};

export default chartOptions;
