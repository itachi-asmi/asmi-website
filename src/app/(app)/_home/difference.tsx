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
										<h3 className="mb-4 text-3xl font-bold text-white">
											Starts on WhatsApp
										</h3>
										<p className="text-lg text-white/90">
											Built around your life. Where your
											life already happens—on WhatsApp.
										</p>
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
						<h3 className="text-asmi-600 mb-4 text-2xl font-semibold">
							Starts on WhatsApp. Built Around Your Life.
						</h3>

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
