'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useAction } from 'next-safe-action/hooks';
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
import { waitlistAction } from '../_actions/waitlist';

const schema = z.object({
	email: z.string().email({ message: 'Invalid email address' }),
});

export default function HeroForm({
	btnClasses,
	waitlistClasses,
}: {
	btnClasses?: string;
	waitlistClasses?: string;
}) {
	const form = useForm({
		resolver: zodResolver(schema),
		defaultValues: {
			email: '',
		},
	});
	const { execute, result, isExecuting } = useAction(waitlistAction);
	const { waitlistId, setWaitlistId } = useUiStore();

	useEffect(() => {
		if (!result.data) {
			return;
		}

		if (result.data.statusCode === 200) {
			form.setError('email', {
				type: 'manual',
				message: result.data?.data?.detail,
			});
		}

		if (result.data.statusCode === 201) {
			toast.success(result.data?.data?.detail);
			setWaitlistId(result.data.data.id);
			form.reset();
		}
	}, [form, result]);

	const onSubmit = async (values: { email: string }) => {
		const payload = {
			email: values.email,
		};
		execute(payload);
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
										type="email"
										id="email"
										className="md:w-[240px] lg:w-[340px]"
										{...field}
									/>
								</FormControl>
								<FormMessage className="!mt-1" />
							</FormItem>
						)}
					/>
					<Button
						disabled={isExecuting || !!waitlistId}
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
			{waitlistId && (
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 10 }}
					transition={{ duration: 0.4, ease: 'easeOut' }}
					className={cn('mt-4 text-lg', waitlistClasses)}
				>
					You will hear from us soon. Your queue number :{' '}
					<span className="text-xl font-semibold">{waitlistId}</span>
				</motion.div>
			)}
		</div>
	);
}
