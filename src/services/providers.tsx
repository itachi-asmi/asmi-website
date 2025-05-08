'use client';

import React, { type ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';

import { Toaster } from '@/ui/toast';

export default function Providers({ children }: { children: ReactNode }) {
	return (
		<>
			<AnimatePresence>{children}</AnimatePresence>
			<Toaster closeButton richColors position="bottom-left" />
		</>
	);
}
