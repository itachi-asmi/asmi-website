import React from 'react';
import { ArrowRight } from 'lucide-react';

import { Button } from '../../../ui/button';

const CTASection = () => {
	return (
		<section className="px-4 py-20">
			<div className="container mx-auto">
				<div className="from-asmi-600 to-asmi-800 mx-auto max-w-4xl overflow-hidden rounded-2xl bg-gradient-to-br shadow-xl">
					<div className="p-12 text-center">
						<h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
							Get Started
						</h2>
						<p className="mx-auto mb-8 max-w-xl text-xl text-white/80">
							Join thousands of early users building their
							superhuman selves with Asmi.
						</p>

						<div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
							<Button className="text-asmi-700 flex items-center justify-center rounded-lg bg-white px-8 py-6 text-lg hover:bg-gray-100">
								Download Asmi Free
								<ArrowRight className="ml-2 size-5" />
							</Button>
							<Button
								variant="outline"
								className="flex items-center justify-center rounded-lg border-white px-8 py-6 text-lg text-white hover:bg-white/10"
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
