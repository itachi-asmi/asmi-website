'use client';

import React, { useState } from 'react';
import { Menu } from 'lucide-react';

import { Button } from '../../../ui/button';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="z-50 w-full px-4 py-6 md:px-8 lg:px-12">
			<div className="container mx-auto flex items-center justify-between">
				<div className="flex items-center">
					<h1 className="text-asmi-600 text-2xl font-bold">Asmi</h1>
					<p className="ml-2 hidden text-sm text-gray-600 md:block">
						Your AI that listens, remembers, and helps you run your
						life..
					</p>
				</div>

				{/* Mobile menu button */}
				<button
					className="rounded-md p-2 hover:bg-gray-100 md:hidden"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					<Menu size={24} />
				</button>

				{/* Desktop navigation */}
				<nav className="hidden space-x-8 md:flex">
					<a
						href="#features"
						className="hover:text-asmi-600 text-gray-600 transition-colors"
					>
						Features
					</a>
					<a
						href="#how-it-works"
						className="hover:text-asmi-600 text-gray-600 transition-colors"
					>
						How it Works
					</a>
					<a
						href="#testimonials"
						className="hover:text-asmi-600 text-gray-600 transition-colors"
					>
						Testimonials
					</a>
				</nav>

				<div className="hidden md:block">
					<Button
						variant="default"
						className="bg-asmi-600 hover:bg-asmi-700"
					>
						Try Asmi on WhatsApp
					</Button>
				</div>

				{/* Mobile menu */}
				{isMenuOpen && (
					<div className="animate-fade-in absolute inset-x-0 top-20 z-50 bg-white shadow-lg md:hidden">
						<div className="flex flex-col p-4">
							<a
								href="#features"
								className="hover:text-asmi-600 py-2 text-gray-600 transition-colors"
							>
								Features
							</a>
							<a
								href="#how-it-works"
								className="hover:text-asmi-600 py-2 text-gray-600 transition-colors"
							>
								How it Works
							</a>
							<a
								href="#testimonials"
								className="hover:text-asmi-600 py-2 text-gray-600 transition-colors"
							>
								Testimonials
							</a>
							<Button
								variant="default"
								className="bg-asmi-600 hover:bg-asmi-700 mt-4"
							>
								Try Asmi on WhatsApp
							</Button>
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
