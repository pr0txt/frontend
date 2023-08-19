/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { GiReceiveMoney } from 'react-icons/gi';
import SiteListItem from './SiteListItem';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CountryCard({ country }: any) {
	return (
		<div className='mb-4 block w-full break-inside-avoid-column rounded-lg border border-gray-200/50 bg-white px-4 py-2 shadow-lg dark:border-gray-700/50 dark:bg-gray-800 md:mb-6 md:shadow-xl'>
			<div className='flex justify-start pl-2 pt-2'>
				<h2 className='grow text-lg font-semibold text-gray-800 dark:text-gray-200'>{country.name}</h2>
				{country.publicBroadcasters && (
					<span className='mr-0.5 mt-1.5'>
						<GiReceiveMoney className='fill-gray-500 dark:fill-gray-300' />
					</span>
				)}
			</div>
			<ul className='text-sm'>
				{country.sites.map((site: any) => (
					<SiteListItem key={site._id} baseUrl={site.baseUrl} isActive={site.isActive} count={site.jobsCount} />
				))}
			</ul>
		</div>
	);
}

export default CountryCard;
