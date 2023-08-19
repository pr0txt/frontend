import './globals.css';
import React from 'react';
import { FaGithub, FaPoop } from 'react-icons/fa';
import ContactButton from '@/components/ContactButton';
import { HiCommandLine } from 'react-icons/hi2';
import DarkModeSwitch from '@/components/DarkModeSwitch';
import Providers from './providers';

export const metadata = {
	title: 'pr0txt.com',
	description:
		'Hallo, ich bin @txt. Schreibe mir eine Nachricht oder markiere mich zusammen mit einem Link. Ich übernehme den Rest.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html suppressHydrationWarning lang='de'>
			<head>
				<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
				<link rel='manifest' href='/site.webmanifest' />
				<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#000000' />
				<meta name='msapplication-TileColor' content='#000000' />
				<meta name='theme-color' content='#000000' />
				<meta name='robots' content='noindex,follow' />
			</head>
			<body>
				<Providers>
					<header className='w-full max-w-4xl'>
						<nav className='border-gray-200 bg-white px-4 py-2.5 dark:bg-gray-800 lg:px-6'>
							<div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between'>
								<a href='/' className='flex items-center'>
									<HiCommandLine />
									<span className='ml-2 self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
										pr0txt.com
									</span>
								</a>
								<div className='flex items-center lg:order-2'>
									<DarkModeSwitch />
									<a
										href='https://github.com/pr0txt'
										title='Link zum Github.com Profil'
										target='_blank'
										className='rounded-lg px-2.5 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800'
										rel='noreferrer'
									>
										<FaGithub />
									</a>
									<ContactButton />
								</div>
							</div>
						</nav>
					</header>
					<main className='m-auto mb-5 w-full max-w-4xl overflow-visible px-4 lg:px-6'>{children}</main>
					<footer className='w-2/3 max-w-4xl lg:w-1/2'>
						<div className='relative flex items-center py-5'>
							<div className='h-px grow border-0 bg-transparent bg-gradient-to-r from-white to-gray-500/50 dark:from-gray-800 dark:to-gray-400/50' />
							<span className='mx-4 shrink bg-white text-xs font-normal text-gray-500 dark:bg-gray-800 dark:text-gray-400'>
								Mostly made out of <FaPoop className='-mt-0.5 ml-1 inline' />
							</span>
							<div className='h-px grow border-0 bg-transparent bg-gradient-to-r from-gray-500/50 to-white dark:from-gray-400/50 dark:to-gray-800' />
						</div>
					</footer>
				</Providers>
			</body>
		</html>
	);
}
