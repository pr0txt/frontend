'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FaMoon, FaSun } from 'react-icons/fa';

function DarkModeSwitch() {
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<button
			type='button'
			id='darkmode-switch'
			aria-label='Darkmode Switch'
			onClick={() => {
				setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
			}}
			className='rounded-lg px-2.5 py-2 text-sm font-medium text-gray-800 transition-all duration-100 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800'
		>
			{resolvedTheme === 'dark' ? <FaSun /> : <FaMoon />}
		</button>
	);
}

export default DarkModeSwitch;
