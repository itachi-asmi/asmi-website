import { env } from '@/env.mjs';

export const siteConfig = {
	title: 'Asmi',
	description: 'Asmi',
	keywords: () => ['Asmi'],
	url: () => env.APP_URL,
	// googleSiteVerificationId: () => env.GOOGLE_SITE_VERIFICATION_ID || '',
};
