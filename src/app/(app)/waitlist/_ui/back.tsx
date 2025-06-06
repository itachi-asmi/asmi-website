'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button } from '../../../../ui/button';

export default function BackButton() {
	const router = useRouter();
	return (
		<div className="mb-8">
			<Button
				variant="ghost"
				className="flex items-center text-gray-600 hover:bg-white"
				onClick={() => router.back()}
			>
				<ArrowLeft className="mr-2" size={16} />
				Back to home
			</Button>
		</div>
	);
}
