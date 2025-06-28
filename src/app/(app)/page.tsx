import { DemoPhone } from './_home/demo-phone';
import { FinalCTA } from './_home/final-cta';
import { HeroSection } from './_home/hero-section';
import { NeuralMemoryEngine } from './_home/memory-engine';
import { SwipeableStories } from './_home/swipable-stories';
import { TypingTestimonials } from './_home/testimonials';
import { ScrollableTimeline } from './_home/timeline';
import { WaitlistCTA } from './_home/waitlist';

import Footer from '@/components/footer';

export default function Index() {
	return (
		<div className="min-h-screen overflow-x-hidden bg-[#0B0B0B]">
			{/* <FloatingNav /> */}
			<HeroSection />
			<DemoPhone />
			<WaitlistCTA />
			<SwipeableStories />
			<NeuralMemoryEngine />
			<TypingTestimonials />
			<ScrollableTimeline />
			<FinalCTA />
			<Footer />
		</div>
	);
}
