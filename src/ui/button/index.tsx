import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';

import { cn } from '../../helpers/utils';

const buttonVariants = cva(
	'inline-flex items-center justify-center gap-8 whitespace-nowrap rounded-xl text-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
	{
		variants: {
			variant: {
				default:
					'bg-primary text-primary-foreground shadow hover:bg-primary/90 font-normal',
				destructive:
					'bg-red-1 text-destructive-foreground shadow-md hover:bg-red-1/90 font-normal',
				outline:
					'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
				secondary:
					'bg-secondary text-white shadow-sm hover:bg-secondary/80 font-normal',
				ghost: 'hover:bg-accent hover:text-accent-foreground font-normal',
				link: 'text-brand underline-offset-4 hover:underline font-normal',
			},
			size: {
				default: 'h-12 px-6 rounded-xl',
				sm: 'h-6 rounded-12 px-3',
				lg: 'h-14 rounded-12 px-3',
				icon: 'h-6 w-6',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	loading?: boolean;
	loadingText?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant,
			size,
			asChild = false,
			loading = false,
			loadingText = 'Submitting...',
			...props
		},
		ref
	) => {
		const Comp = asChild ? Slot : 'button';

		return (
			<Comp
				className={cn(
					buttonVariants({ variant, size, className }),
					loading && 'cursor-not-allowed opacity-60'
				)}
				ref={ref}
				disabled={loading || props.disabled}
				{...props}
			>
				{loading ? (
					<div className="flex items-center gap-8">
						<Loader2 className="animate-spin" />
						<span className="text-14 font-medium">
							{loadingText}
						</span>
					</div>
				) : (
					props.children
				)}
			</Comp>
		);
	}
);
Button.displayName = 'DefaultButton';

export { Button, buttonVariants };
