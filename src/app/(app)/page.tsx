import React from 'react';

import CTASection from './_home/cta';
import DifferenceSection from './_home/difference';
import FeaturesSection from './_home/features';
import Footer from './_home/footer';
import Header from './_home/header';
import HeroSection from './_home/hero';
import HowItWorksSection from './_home/how-it-works';
import TestimonialsSection from './_home/testimonials';

const Page = () => {
	return (
		<div className="min-h-screen bg-white">
			<Header />
			<HeroSection />
			<FeaturesSection />
			<HowItWorksSection />
			<DifferenceSection />
			<TestimonialsSection />
			<CTASection />
			<Footer />
		</div>
	);
};

export default Page;
