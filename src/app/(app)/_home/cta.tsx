'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

import { Button } from '../../../ui/button';

const CTASection = () => {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.2 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, []);

	return (
		<section ref={sectionRef} className="px-4 py-20">
			<div className="container mx-auto">
				<div
					className={`from-asmi-600 to-asmi-800 mx-auto max-w-4xl overflow-hidden rounded-[32px] bg-gradient-to-br shadow-2xl transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
				>
					<div className="relative overflow-hidden p-12 text-center">
						{/* Background blobs */}
						<div className="absolute left-0 top-0 size-64 rounded-full bg-white/10 blur-3xl"></div>
						<div className="bg-asmi-900/30 absolute bottom-0 right-0 size-64 rounded-full blur-3xl"></div>

						<h2 className="relative z-10 mb-6 text-3xl font-bold text-white md:text-4xl">
							Get Started
						</h2>
						<p className="relative z-10 mx-auto mb-8 max-w-xl text-xl text-white/90">
							Join thousands of early users building their
							superhuman selves with Asmi on WhatsApp.
						</p>

						<div className="relative z-10 flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
							<Button className="text-asmi-700 flex items-center justify-center rounded-full bg-white px-8 py-6 text-lg shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100 hover:shadow-xl">
								Start Chatting with Asmi
								<ArrowRight className="ml-2 size-5" />
							</Button>
							<Button
								variant="outline"
								className="flex items-center justify-center rounded-lg border-white px-8 py-6 text-lg"
							>
								Join Waitlist
							</Button>
						</div>
					</div>

					<div className="from-asmi-300 via-asmi-400 to-asmi-300 h-2 bg-gradient-to-r"></div>
				</div>
			</div>
		</section>
	);
};

export default CTASection;
