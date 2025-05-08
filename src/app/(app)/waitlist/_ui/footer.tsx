import React from 'react';

const Footer = () => {
	return (
		<footer className="border-t border-gray-200 px-4 py-16">
			<div className="container mx-auto">
				<div className="flex flex-col justify-between md:flex-row">
					<div className="mb-8 md:mb-0">
						<div className="mb-4 flex items-center">
							<img
								src="/images/logo.png"
								alt="Asmi Logo"
								className="h-8 w-auto"
							/>
							{/* <span className="text-sm text-gray-500">
								• Personal Assistant on WhatsApp
							</span> */}
						</div>
						<p className="max-w-xs text-gray-600">
							Your AI that listens, remembers, and helps you run
							your life—all on WhatsApp.
						</p>
					</div>
				</div>

				<div className="mt-16 flex flex-col items-center justify-between border-t border-gray-200 pt-8 md:flex-row">
					<p className="mb-4 text-sm text-gray-500 md:mb-0">
						© {new Date().getFullYear()} Asmi AI. All rights
						reserved.
					</p>
					<div className="flex space-x-6">
						<a
							href="#"
							className="hover:text-asmi-600 text-sm text-gray-500"
						>
							Privacy
						</a>
						<a
							href="#"
							className="hover:text-asmi-600 text-sm text-gray-500"
						>
							Discord
						</a>
						<a
							href="#"
							className="hover:text-asmi-600 text-sm text-gray-500"
						>
							Contact
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
