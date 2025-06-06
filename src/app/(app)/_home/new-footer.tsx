import Link from 'next/link';

export default function NewFooter() {
	return (
		<footer className="border-t border-[#5DFF9F]/10 bg-[#0D0D0D] px-6 py-16">
			<div className="mx-auto max-w-7xl">
				<div className="flex flex-col items-center justify-between md:flex-row">
					<div className="gradient-text-primary mb-4 text-2xl font-bold md:mb-0">
						Asmi
					</div>
					<div className="flex space-x-8 text-gray-400">
						<Link
							href="/privacy"
							rel="noopener noreferrer"
							className="transition-colors duration-300 hover:text-[#5DFF9F]"
						>
							Privacy
						</Link>
						{/* <a
							href="#"
							className="transition-colors duration-300 hover:text-[#5DFF9F]"
						>
							Terms
						</a> */}
						<a
							href="mailto:rishi@asmiai.com"
							className="transition-colors duration-300 hover:text-[#5DFF9F]"
						>
							rishi@asmiai.com
						</a>
					</div>
				</div>
				<div className="mt-12 border-t border-[#5DFF9F]/10 pt-8 text-center text-gray-500">
					<p>
						© {new Date().getFullYear()} Humint Labs, Inc. Built
						for founders who move fast.
					</p>
				</div>
			</div>
		</footer>
	);
}
