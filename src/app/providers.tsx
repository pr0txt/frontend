'use client';

import React from 'react';
import { ThemeProvider } from 'next-themes';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Providers({ children }: any) {
	return <ThemeProvider attribute='class'>{children}</ThemeProvider>;
}
