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
					<div
						className="grid grid-cols-2 gap-8 md:ml-auto lg:place-items-end
"
					>
						<div className="col-span-1">
							<h3 className="mb-4 font-semibold text-white">
								Policy
							</h3>
							<ul className="space-y-3">
								<li>
									<Link
										href="/privacy"
										className="text-gray-400"
									>
										Privacy Policy
									</Link>
								</li>
							</ul>
						</div>
						<div className="col-span-1">
							<h3 className="mb-4 font-semibold text-white">
								Contact
							</h3>
							<ul className="space-y-3">
								<li>
									<a
										href="mailto:rishi@asmiai.com"
										className="text-gray-400"
									>
										rishi@asmiai.com
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="mt-12 border-t border-[#5DFF9F]/10 pt-8 text-center text-gray-500">
					<p>© {new Date().getFullYear()} Humint Labs, Inc.</p>
				</div>
			</div>
		</footer>
	);
}
