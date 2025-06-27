import Link from 'next/link';

import Logo from '@/components/logo';

export function Footer() {
	return (
		<footer className="border-t border-white/5 px-4 py-8">
			<div className="mx-auto flex max-w-6xl flex-col items-center justify-between sm:flex-row">
				<div className="mb-4 text-xl font-bold text-white sm:mb-0">
					<Logo />
				</div>
				<div className="flex space-x-6 text-gray-400">
					<Link
						href="/privacy"
						className="transition-colors hover:text-[#5DFF9F]"
					>
						Privacy
					</Link>
					<a
						href="#"
						className="transition-colors hover:text-[#5DFF9F]"
					>
						Terms
					</a>
					<a
						href="#"
						className="transition-colors hover:text-[#5DFF9F]"
					>
						Contact
					</a>
				</div>
			</div>
		</footer>
	);
}
