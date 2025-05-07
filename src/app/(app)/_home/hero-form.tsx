'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight } from 'lucide-react';
import { z } from 'zod';

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

export default function HeroForm() {
	const form = useForm({
		resolver: zodResolver(schema),
		defaultValues: {
			email: '',
		},
	});

	const onSubmit = async (values: { email: string }) => {
		const payload = {
			mobileNumber: values.email,
		};
		console.log(payload);

		// execute(payload);
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
					<Button className="bg-asmi-600 hover:bg-asmi-700 z-10 flex items-center gap-2 rounded-lg px-4 py-6 text-lg text-white">
						<span>Join the Waitlist</span>
						<ArrowRight className="ml-1 size-5" />
					</Button>
				</form>
			</Form>
		</div>
	);
}
