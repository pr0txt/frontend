import React from 'react';
import { getComments, getMessages, getTotal } from '@/utils/mongoose';
import dbConnect from '@/utils/dbConnect';
import ChartCard from './ChartCard';

const StatsContainer = async () => {
	await dbConnect();
	const total = await getTotal();

	const tempComments = await getComments();
	const tempMessages = await getMessages();

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const comments = tempComments.map((c: any) => parseInt(c.count, 10));
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const messages = tempMessages.map((m: any) => parseInt(m.count, 10));

	// eslint-disable-next-line security/detect-object-injection
	const sum = comments.map((num: number, idx: number) => num + messages[idx]);

	return (
		<div className='mb-4 w-full max-w-4xl justify-between gap-5 px-2 md:flex md:flex-row'>
			<ChartCard
				id={1}
				title='Gesamt'
				countAll={total[0] && total[1] ? total[0].count + total[1].count : 0}
				data={sum}
				bgColor='rgba(101, 116, 205, 0.1)'
				bColor='rgba(101, 116, 205, 0.8)'
			/>

			<ChartCard
				id={2}
				title='Kommentare'
				countAll={total[0] ? total[0].count : 0}
				data={comments}
				bgColor='rgba(246, 109, 155, 0.1)'
				bColor='rgba(246, 109, 155, 0.8)'
			/>
			<ChartCard
				id={3}
				title='Nachrichten'
				countAll={total[1] ? total[1].count : 0}
				data={messages}
				bgColor='rgba(246, 153, 63, 0.1)'
				bColor='rgba(246, 153, 63, 0.8)'
			/>
		</div>
	);
};

export default StatsContainer;
