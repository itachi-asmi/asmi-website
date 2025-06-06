'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { z } from 'zod';

import { useUiStore } from '../../../store/use-ui';
import { Button } from '../../../ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '../../../ui/form';
import { Input } from '../../../ui/input';

import { cn } from '@/helpers/utils';

const schema = z.object({
	email: z.string().email({ message: 'Invalid email address' }),
});

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: 'easeOut' },
	},
};

export default function HeroForm({
	className,
	btnClasses,
	inputClasses,
	containerClasses,
}: {
	className?: string;
	btnClasses?: string;
	inputClasses?: string;
	containerClasses?: string;
}) {
	const form = useForm({
		resolver: zodResolver(schema),
		defaultValues: {
			email: '',
		},
	});
	const { setWaitlistId } = useUiStore();
	const router = useRouter();

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [hasFetchedCount, setHasFetchedCount] = useState(false);

	useEffect(() => {
		router.prefetch('/waitlist');
	}, [router]);

	const fetchWaitlistCount = async (): Promise<number | null> => {
		try {
			const response = await axios.get(
				`${process.env.NEXT_PUBLIC_BASE_PATH}prospective/waitlist/count/`
			);
			return response.data?.count ?? null;
		} catch (error) {
			console.error('Failed to fetch waitlist count:', error);
			return null;
		}
	};

	const handleInputFocus = async () => {
		if (!hasFetchedCount) {
			setHasFetchedCount(true);
			await fetchWaitlistCount();
		}
	};

	const onSubmit = async (values: { email: string }) => {
		const payload = {
			email: values.email,
		};

		setIsSubmitting(true);

		try {
			const response = await axios.post(
				`${process.env.NEXT_PUBLIC_BASE_PATH}prospective/waitlist/join/`,
				payload
			);

			if (response.status === 200) {
				form.setError('email', {
					type: 'manual',
					message: response?.data?.detail,
				});
			}

			if (response.status === 201) {
				router.push('/waitlist');
				setWaitlistId(response.data?.id);
				toast.success(response?.data?.detail);
				form.reset();
			}
		} catch (error) {
			console.error('Error during form submission:', error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<Form {...form}>
			<motion.form
				onSubmit={form.handleSubmit(onSubmit)}
				className={cn('max-w-md space-y-4', className)}
				variants={itemVariants}
			>
				<div className={cn('flex gap-3', containerClasses)}>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem className="relative">
								<FormControl>
									<Input
										placeholder="Enter Email Address"
										type="text"
										id="email"
										className={cn(
											'md:w-[240px] lg:w-[340px]',
											inputClasses
										)}
										onFocus={handleInputFocus}
										{...field}
									/>
								</FormControl>
								<FormMessage className="text-destructive !mt-1 text-left" />
							</FormItem>
						)}
					/>
					<Button
						type="submit"
						disabled={isSubmitting}
						className={cn(
							'hover-glow bg-white px-8 font-medium text-black transition-all duration-300 hover:bg-[#5DFF9F] hover:text-black',
							btnClasses
						)}
					>
						Join Beta
					</Button>
				</div>
			</motion.form>
		</Form>
	);
}
