/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import React, { useEffect, useRef } from 'react';
import chartOptions from '@/utils/chartOptions';
import Chart from 'chart.js/auto';

function ChartCard({ id, title, countAll, data, bgColor, bColor }: any) {
	const chartRef = useRef<any>(null);

	useEffect(() => {
		const ctx = chartRef.current?.getContext('2d');
		const chart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: [1, 2, 1, 3, 5, 4, 7],
				datasets: [
					{
						backgroundColor: bgColor,
						borderColor: bColor,
						borderWidth: 2,
						fill: 'start',
						data,
					},
				],
			},
			options: chartOptions,
		});

		return () => {
			chart.destroy();
		};
	});

	const sevenDaysTotal = data.reduce((agg: number, curr: number) => agg + curr);
	const percentage =
		countAll - sevenDaysTotal !== 0 ? Math.round(countAll / ((countAll - sevenDaysTotal) / 100) - 100) : countAll * 100;

	return (
		<div className='relative mb-4 w-full overflow-hidden rounded-lg border border-gray-200/50 bg-white shadow-lg dark:border-gray-700/50 dark:bg-gray-800 md:shadow-xl'>
			<div className='relative z-10 px-3 pb-10 pt-8 text-center'>
				<h1 className='text-sm font-semibold uppercase leading-tight text-gray-800 dark:text-gray-200'>{title}</h1>
				<h2 className='my-3 text-3xl font-semibold leading-tight text-gray-500 dark:text-gray-300'>{countAll}</h2>
				<p className='text-xs leading-tight text-green-500'>▲ {percentage}%</p>
			</div>
			<div className='absolute inset-x-0 bottom-0'>
				<canvas ref={chartRef} id={id} height='70' />
			</div>
		</div>
	);
}

export default ChartCard;
