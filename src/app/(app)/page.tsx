'use client';

import dynamic from 'next/dynamic';

import { useSectionRefs } from './_home/_hooks/use-sections';
import AnimatedHero from './_home/animated-hero';

import Footer from '@/components/footer';
import Nav from '@/components/nav';

const ToggleComparison = dynamic(() => import('./_home/toggle-comparision'), {
	ssr: false,
});
const FeaturesSection = dynamic(() => import('./_home/features-1'), {
	ssr: true,
});
const PersonasSection = dynamic(() => import('./_home/personas'), {
	ssr: true,
});
const SocialProofSection = dynamic(() => import('./_home/social'), {
	ssr: true,
});
const HowItWorksSection = dynamic(() => import('./_home/how-it-works-1'), {
	ssr: true,
});
const FinalCtaSection = dynamic(() => import('./_home/final-cta'), {
	ssr: true,
});

const Index = () => {
	const { refs, inViews } = useSectionRefs();

	return (
		<div className="home min-h-screen bg-[#0B0B0B]">
			<Nav />
			<AnimatedHero />
			<ToggleComparison />

			<main className="relative mx-auto max-w-7xl">
				<section ref={refs.features}>
					<FeaturesSection inView={inViews.features} />
				</section>

				<section ref={refs.personas}>
					<PersonasSection inView={inViews.personas} />
				</section>

				<section ref={refs.socialProof}>
					<SocialProofSection inView={inViews.socialProof} />
				</section>

				<section ref={refs.howItWorks}>
					<HowItWorksSection inView={inViews.howItWorks} />
				</section>

				<section ref={refs.finalCta}>
					<FinalCtaSection inView={inViews.finalCta} />
				</section>
			</main>
			<Footer />
		</div>
	);
};

export default Index;
