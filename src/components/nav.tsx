import Logo from './logo';

import { Button } from '@/ui/button';

export default function Nav({ showButton = false }) {
	return (
		<nav className="glass-card fixed top-0 z-50 w-full border-b border-[#5DFF9F]/10">
			<div className="mx-auto max-w-7xl px-6 py-4">
				<div className="flex items-center justify-between">
					<Logo />
					{showButton && (
						<Button
							variant="outline"
							className="glass-card hover-glow border-[#5DFF9F]/20 text-[#5DFF9F] hover:bg-[#5DFF9F]/10"
						>
							Join Beta
						</Button>
					)}
				</div>
			</div>
		</nav>
	);
}
