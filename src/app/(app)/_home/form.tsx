'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { Send } from 'lucide-react';
import { useRouter } from 'next/navigation';
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

export default function HeroForm({
	btnChange = false,
}: {
	btnChange?: boolean;
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
				// toast.success(response?.data?.detail);
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
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className={cn('max-w-md space-y-4')}
			>
				<div className={cn('flex gap-3')}>
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
											'flex-1 border-white/10 bg-white/[0.03] text-white placeholder:text-gray-400'
										)}
										onFocus={handleInputFocus}
										{...field}
									/>
								</FormControl>
								<FormMessage className="!text-destructive !mt-1 text-left" />
							</FormItem>
						)}
					/>
					<Button
						type="submit"
						disabled={isSubmitting}
						className={cn(
							'bg-[#5DFF9F] px-6 font-medium text-black hover:bg-[#5DFF9F]/90'
						)}
						aria-label="join beta"
					>
						{btnChange ? (
							<Send className="size-4" />
						) : (
							'Secure my spot'
						)}
					</Button>
				</div>
			</form>
		</Form>
	);
}
