import dynamic from 'next/dynamic';

import AnimatedHero from './animated-hero';

import Footer from '@/components/footer';
import Nav from '@/components/nav';

const ToggleComparison = dynamic(() => import('./toggle-comparision'));
const FeaturesSection = dynamic(() => import('./features-1'));
const PersonasSection = dynamic(() => import('./personas'));
const SocialProofSection = dynamic(() => import('./social'));
const HowItWorksSection = dynamic(() => import('./how-it-works-1'));
const FinalCtaSection = dynamic(() => import('./final-cta'));

const Index = () => {
	return (
		<div className="home min-h-screen bg-[#0B0B0B]">
			<Nav />
			<main className="relative mx-auto max-w-7xl">
				<AnimatedHero />
				<ToggleComparison />
				<FeaturesSection />
				<PersonasSection />
				<SocialProofSection />
				<HowItWorksSection />
				<FinalCtaSection />
			</main>
			<Footer />
		</div>
	);
};

export default Index;
