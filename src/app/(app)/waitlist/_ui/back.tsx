'use client';

import { ArrowLeft } from 'lucide-react';
import router from 'next/router';

import { Button } from '../../../../ui/button';

export default function BackButton() {
	return (
		<div className="mb-8">
			<Button
				variant="ghost"
				className="hover:text-asmi-600 flex items-center text-gray-600"
				onClick={() => router.back()}
			>
				<ArrowLeft className="mr-2" size={16} />
				Back to home
			</Button>
		</div>
	);
}
