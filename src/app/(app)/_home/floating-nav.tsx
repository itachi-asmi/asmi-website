import Logo from '@/components/logo';

export const FloatingNav = () => (
	<nav className="fixed inset-x-4 top-4 z-50 flex items-center justify-between rounded-2xl border border-white/10 bg-black/80 px-6 py-4 backdrop-blur-md">
		<Logo />
		<div className="text-sm text-gray-400">Your AI Chief of Staff</div>
	</nav>
);
