import React, { Suspense } from 'react';
import CountriesContainer from '@/components/CountriesContainer';
import StatsContainer from '@/components/StatsContainer';

export const revalidate = 0;

export default async function Home() {
	return (
		<>
			<div className='mx-auto w-full p-4 text-center lg:pb-4 lg:pt-6'>
				<h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl'>
					Hallo, ich bin{' '}
					<span className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-purple-900 bg-clip-text text-transparent'>
						@txt
					</span>
				</h1>
				<p className='mb-8 text-lg font-normal text-gray-500 dark:text-gray-300 sm:px-16 lg:text-xl xl:px-40'>
					Schreibe mir eine Nachricht oder markiere mich zusammen mit einem Link. Ich übernehme den Rest.
				</p>
			</div>
			<Suspense fallback={<p>Loading feed...</p>}>
				<StatsContainer />
			</Suspense>
			<Suspense fallback={<p>Loading feed...</p>}>
				<CountriesContainer />
			</Suspense>
		</>
	);
}
