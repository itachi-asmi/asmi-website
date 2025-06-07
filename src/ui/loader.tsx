import { cn } from '@/helpers/utils';

export function Loader({ className }: { className?: string }) {
	return (
		<div
			className={cn(
				'inline-block size-4 animate-spin rounded-full border-2 border-current border-t-transparent text-white',
				className
			)}
			role="status"
			aria-label="loading"
		>
			<span className="sr-only">Loading...</span>
		</div>
	);
}
