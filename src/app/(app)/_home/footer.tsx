import React from 'react';
import { MessageSquare, Twitter } from 'lucide-react';

const Footer = () => {
	return (
		<footer className="border-t border-gray-200 px-4 py-16">
			<div className="container mx-auto">
				<div className="flex flex-col justify-between md:flex-row">
					<div className="mb-8 md:mb-0">
						<div className="mb-4 flex items-center">
							<h2 className="text-asmi-600 mr-2 text-2xl font-bold">
								Asmi
							</h2>
							<span className="text-sm text-gray-500">
								• Personal Assistant on WhatsApp
							</span>
						</div>
						<p className="max-w-xs text-gray-600">
							Your AI that listens, remembers, and helps you run
							your life—all on WhatsApp.
						</p>
					</div>

					<div className="grid grid-cols-2 gap-8 md:grid-cols-4">
						<div>
							<h3 className="mb-4 font-semibold text-gray-900">
								Product
							</h3>
							<ul className="space-y-3">
								<li>
									<a
										href="#features"
										className="hover:text-asmi-600 text-gray-600 transition-colors"
									>
										Features
									</a>
								</li>
								<li>
									<a
										href="#how-it-works"
										className="hover:text-asmi-600 text-gray-600 transition-colors"
									>
										How it Works
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:text-asmi-600 text-gray-600 transition-colors"
									>
										Pricing
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:text-asmi-600 text-gray-600 transition-colors"
									>
										FAQ
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="mb-4 font-semibold text-gray-900">
								Company
							</h3>
							<ul className="space-y-3">
								<li>
									<a
										href="#"
										className="hover:text-asmi-600 text-gray-600 transition-colors"
									>
										About
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:text-asmi-600 text-gray-600 transition-colors"
									>
										Blog
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:text-asmi-600 text-gray-600 transition-colors"
									>
										Careers
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:text-asmi-600 text-gray-600 transition-colors"
									>
										Press
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="mb-4 font-semibold text-gray-900">
								Resources
							</h3>
							<ul className="space-y-3">
								<li>
									<a
										href="#"
										className="hover:text-asmi-600 text-gray-600 transition-colors"
									>
										Documentation
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:text-asmi-600 text-gray-600 transition-colors"
									>
										Support
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:text-asmi-600 text-gray-600 transition-colors"
									>
										Privacy
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:text-asmi-600 text-gray-600 transition-colors"
									>
										Contact
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="mb-4 font-semibold text-gray-900">
								Connect
							</h3>
							<div className="flex space-x-4">
								<a
									href="#"
									className="hover:text-asmi-600 text-gray-600 transition-colors"
								>
									<Twitter size={20} />
								</a>
								<a
									href="#"
									className="hover:text-asmi-600 text-gray-600 transition-colors"
								>
									<MessageSquare size={20} />
								</a>
							</div>
						</div>
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
