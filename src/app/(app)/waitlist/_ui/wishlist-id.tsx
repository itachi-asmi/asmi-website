'use client';

import { useUiStore } from '../../../../store/use-ui';

export default function WaitlistId() {
	const { waitlistId } = useUiStore();

	return (
		<div className="mb-8 block text-xl md:text-2xl">
			You&apos;re <span className="font-bold">#{waitlistId} </span> in
			line and moving
		</div>
	);
}
