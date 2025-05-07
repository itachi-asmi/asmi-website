/* eslint-disable @next/next/no-img-element */
import React from 'react';

import HeroForm from './hero-form';

const HeroSection = () => {
	return (
		<section className="relative overflow-hidden px-4 py-10 md:py-12">
			<div className="container mx-auto">
				<div className="flex flex-col items-center md:flex-row">
					<div className="animate-fade-in mb-12 md:mb-0 md:w-1/2">
						<h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
							The Smartest{' '}
							<span className="text-asmi-600">
								Personal Assistant
							</span>{' '}
							on WhatsApp
						</h1>
						<p className="mb-8 max-w-lg text-xl text-gray-600">
							Turn every note or voice message into action—Asmi
							extracts key info, remembers it, and helps you get
							things done.
						</p>
						<HeroForm />
					</div>

					<div className="animate-fade-in relative md:w-1/2">
						<div className="relative z-10">
							<div className="from-asmi-200 to-asmi-400 flex h-[400px] w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br shadow-xl md:h-[500px]">
								{/* <img
									src="/images/hero.png"
									alt="Asmi AI Interface"
									className="animate-float h-auto w-1/2 rounded-md object-contain md:w-[30%]"
								/> */}
								<video
									src="/images/hero.mp4"
									autoPlay
									loop
									muted
									playsInline
									preload="auto"
									className="size-full rounded-md object-cover"
								/>
							</div>
						</div>
						<div className="bg-asmi-300 absolute -bottom-20 -right-20 size-64 rounded-full opacity-20 blur-3xl"></div>
						<div className="bg-asmi-400 absolute -left-20 -top-20 size-72 rounded-full opacity-20 blur-3xl"></div>
					</div>
				</div>
			</div>

			{/* Background elements */}
			<div className="bg-asmi-100 absolute right-0 top-1/4 size-64 rounded-full opacity-30 blur-3xl"></div>
			<div className="bg-asmi-200 absolute bottom-0 left-1/4 size-72 rounded-full opacity-30 blur-3xl"></div>
		</section>
	);
};

export default HeroSection;
