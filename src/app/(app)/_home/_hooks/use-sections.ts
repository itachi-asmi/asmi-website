'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

export function useSectionRefs() {
	const features = useRef<HTMLElement>(null);
	const personas = useRef<HTMLElement>(null);
	const socialProof = useRef<HTMLElement>(null);
	const howItWorks = useRef<HTMLElement>(null);
	const finalCta = useRef<HTMLElement>(null);

	return {
		refs: {
			features,
			personas,
			socialProof,
			howItWorks,
			finalCta,
		},
		inViews: {
			features: useInView(features, { once: true, margin: '-100px' }),
			personas: useInView(personas, { once: true, margin: '-100px' }),
			socialProof: useInView(socialProof, {
				once: true,
				margin: '-100px',
			}),
			howItWorks: useInView(howItWorks, { once: true, margin: '-100px' }),
			finalCta: useInView(finalCta, { once: true, margin: '-100px' }),
		},
	};
}
