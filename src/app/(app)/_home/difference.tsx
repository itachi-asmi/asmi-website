import React from 'react';

const DifferenceSection = () => {
	return (
		<section className="relative overflow-hidden px-4 py-20">
			<div className="container relative z-10 mx-auto">
				<div className="flex flex-col items-center lg:flex-row">
					<div className="mb-10 w-full lg:mb-0 lg:w-1/2">
						<div className="relative">
							<div className="from-asmi-300 to-asmi-500 h-[400px] w-full overflow-hidden rounded-xl bg-gradient-to-br shadow-lg">
								<div className="absolute inset-0 flex items-center justify-center">
									<div className="p-8 text-center">
										<blockquote className="relative text-xl italic text-white/90 lg:text-2xl">
											<svg
												className="mx-auto mb-4 size-8 text-white/50"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path d="M7.17 6A5.001 5.001 0 002 11v5a1 1 0 001 1h4a1 1 0 001-1v-5a1 1 0 00-1-1H4a3 3 0 013.17-4zM17.17 6A5.001 5.001 0 0012 11v5a1 1 0 001 1h4a1 1 0 001-1v-5a1 1 0 00-1-1h-3a3 3 0 013.17-4z" />
											</svg>
											<p>
												“Love the idea! I’ve always
												dreamed of a tool that captures
												my thoughts and surroundings,
												organizing them with AI. Asmi
												brings that vision to life—it’s
												like having a digital memory
												that thinks for me.”
											</p>
										</blockquote>
										<footer className="mt-6 flex items-center justify-center gap-2 font-semibold text-white">
											<span className="text-xl leading-none">
												—
											</span>
											<span>Steve Chen</span>
											<span className="text-sm font-normal text-white/70">
												(YouTube Founder)
											</span>
										</footer>
									</div>
								</div>
							</div>
							<div className="bg-asmi-200 absolute -bottom-6 -right-6 size-32 rounded-full"></div>
							<div className="bg-asmi-100 absolute -left-6 -top-6 size-24 rounded-full"></div>
						</div>
					</div>

					<div className="lg:w-1/2 lg:pl-16">
						<h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
							Why Asmi Is Different
						</h2>

						<p className="mb-6 text-lg text-gray-600">
							Most AI tools need apps and effort. Asmi lives where
							your life already happens—on WhatsApp. You talk to
							it just like a friend, and it becomes your second
							brain, always on, always helpful.
						</p>

						<div className="rounded-lg border border-gray-100 bg-gray-50 p-6">
							<h4 className="mb-3 font-medium text-gray-900">
								How Asmi compares to other AI assistants:
							</h4>

							<ul className="space-y-3">
								<li className="flex items-start">
									<span className="bg-asmi-100 text-asmi-700 mr-3 mt-0.5 flex size-6 items-center justify-center rounded-full">
										✓
									</span>
									<span className="text-gray-700">
										Lives in WhatsApp vs. requiring a
										separate app
									</span>
								</li>
								<li className="flex items-start">
									<span className="bg-asmi-100 text-asmi-700 mr-3 mt-0.5 flex size-6 items-center justify-center rounded-full">
										✓
									</span>
									<span className="text-gray-700">
										Remembers your context vs. isolated
										conversations
									</span>
								</li>
								<li className="flex items-start">
									<span className="bg-asmi-100 text-asmi-700 mr-3 mt-0.5 flex size-6 items-center justify-center rounded-full">
										✓
									</span>
									<span className="text-gray-700">
										Becomes your second brain vs. just
										answering questions
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			{/* Background elements */}
			<div className="absolute left-0 top-1/4 size-64 rounded-full bg-purple-50 opacity-30 blur-3xl"></div>
			<div className="absolute bottom-0 right-1/4 size-72 rounded-full bg-purple-100 opacity-30 blur-3xl"></div>
		</section>
	);
};

export default DifferenceSection;
