'use server';

import { z } from 'zod';

import { safeActionClient } from '../../../services/next-safe-actions';

import { env } from '@/env.mjs';

const schema = z.object({
	email: z.string().email({ message: 'Invalid email address' }),
});

export const waitlistAction = safeActionClient
	.schema(schema)
	.action(async ({ parsedInput }) => {
		const { email } = parsedInput;
		try {
			const response = await fetch(
				`${env.NEXT_PUBLIC_BASE_PATH}/prospective/waitlist/join/`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ email }),
				}
			);
			if (!response.ok) {
				return {
					status: 'ERROR',
					msg: 'Failed to check waitlist.',
					data: null,
					statusCode: response.status,
				};
			}

			const data = await response.json();
			return {
				status: 'SUCCESS',
				msg: 'Successfully joined the waitlist.',
				data: data,
				statusCode: response.status,
			};
		} catch (err) {
			console.error(err);
			return {
				status: 'ERROR',
				msg: 'A network error occurred. Please check your connection and try again.',
				data: null,
				statusCode: 500,
			};
		}
	});
