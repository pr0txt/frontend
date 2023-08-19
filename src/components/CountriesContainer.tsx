/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import dbConnect from '@/utils/dbConnect';
import { getCountries } from '@/utils/mongoose';
import CountryCard from './CountryCard';

const CountriesContainer = async () => {
	await dbConnect();
	const countries = await getCountries();

	return (
		<div className='mt-4 w-full gap-x-3 overflow-visible px-2 sm:columns-1 md:columns-2 lg:columns-3'>
			{countries.map((country: any) => (
				<CountryCard key={country._id} country={country} />
			))}
		</div>
	);
};

export default CountriesContainer;
