'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { z } from 'zod';

import { cn } from '../../../helpers/utils';
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

const schema = z.object({
	email: z.string().email({ message: 'Invalid email address' }),
});

export default function HeroForm({ btnClasses }: { btnClasses?: string }) {
	const form = useForm({
		resolver: zodResolver(schema),
		defaultValues: {
			email: '',
		},
	});
	const { setWaitlistId } = useUiStore();
	const router = useRouter();

	const [isSubmitting, setIsSubmitting] = useState(false);
	// const [hasFetchedCount, setHasFetchedCount] = useState(false);

	useEffect(() => {
		router.prefetch('/waitlist');
	}, [router]);

	// const fetchWaitlistCount = async (): Promise<number | null> => {
	// 	try {
	// 		const response = await axios.get(
	// 			`${process.env.NEXT_PUBLIC_BASE_PATH}prospective/waitlist/count/`
	// 		);
	// 		console.log('Waitlist count:', response.data?.count);
	// 		return response.data?.count ?? null;
	// 	} catch (error) {
	// 		console.error('Failed to fetch waitlist count:', error);
	// 		return null;
	// 	}
	// };

	// const handleInputFocus = async () => {
	// 	if (!hasFetchedCount) {
	// 		setHasFetchedCount(true);
	// 		await fetchWaitlistCount();
	// 	}
	// };

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
		<div className="relative z-10">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex flex-col gap-4 sm:flex-row"
				>
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
										className="md:w-[240px] lg:w-[340px]"
										// onFocus={handleInputFocus}
										{...field}
									/>
								</FormControl>
								<FormMessage className="!mt-1 text-left" />
							</FormItem>
						)}
					/>
					<Button
						disabled={isSubmitting}
						className={cn(
							'bg-asmi-600 hover:bg-asmi-700 z-10 flex items-center gap-2 rounded-lg px-4 py-6 text-lg text-white',
							btnClasses
						)}
					>
						<span>Join the Waitlist</span>
						<ArrowRight className="ml-1 size-5" />
					</Button>
				</form>
			</Form>
		</div>
	);
}
