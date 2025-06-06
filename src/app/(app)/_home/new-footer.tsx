import Link from 'next/link';

export default function NewFooter() {
	return (
		<footer className="border-t border-[#5DFF9F]/10 bg-[#0D0D0D] px-6 py-16">
			<div className="mx-auto max-w-7xl">
				<div className="flex flex-col items-center justify-between gap-8 md:flex-row">
					<div className="flex items-center gap-4">
						<span className="text-xl font-medium text-white">
							Built for operators who move fast.
						</span>
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
							Contact - rishi@asmiai.com
						</a>
					</div>
				</div>
				<div className="mt-12 border-t border-[#5DFF9F]/10 pt-8 text-center text-gray-500">
					<p>© {new Date().getFullYear()} Humint Labs, Inc.</p>
				</div>
			</div>
		</footer>
	);
}
