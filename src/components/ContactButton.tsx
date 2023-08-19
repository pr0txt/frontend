'use client';

import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

function ContactButton() {
	return (
		// eslint-disable-next-line jsx-a11y/anchor-is-valid
		<a
			href='#'
			title='In Kontakt treten'
			onClick={() => window.open(`mailto:${['contact', 'pr0txt.com'].join('@')}`, '_self')}
			className='rounded-lg px-2.5 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800'
		>
			<FaEnvelope />
		</a>
	);
}

export default ContactButton;
