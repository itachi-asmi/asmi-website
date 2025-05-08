'use client';

import React, { type ReactNode } from 'react';

import { Toaster } from '@/ui/toast';

export default function Providers({ children }: { children: ReactNode }) {
	return (
		<>
			{children}
			<Toaster closeButton richColors position="bottom-left" />
		</>
	);
}
