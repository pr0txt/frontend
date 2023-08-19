import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SiteListItem({ baseUrl, isActive, count }: any) {
	return (
		<li className='my-2 flex justify-start rounded-md p-1 text-gray-500 dark:text-gray-300'>
			{isActive ? (
				<span className='m-2 h-2 w-2 rounded-full bg-green-400' />
			) : (
				<span className='m-2 h-2 w-2 rounded-full bg-red-400' />
			)}
			<div className='grow px-2 font-medium'>{baseUrl}</div>
			<div className='text-sm font-normal tracking-wide'>
				<em>
					{count || 0}
					<small>x</small>
				</em>
			</div>
		</li>
	);
}

export default SiteListItem;
