import '@/styles/globals.css';

// import 'react-calendar/dist/Calendar.css';
import { type PropsWithChildren } from 'react';
import { type Metadata } from 'next';

// import Script from 'next/script';
import Providers from '../services/providers';

import { siteConfig } from '@/helpers/constant';
import { fonts } from '@/helpers/fonts';
import { cn } from '@/helpers/utils';

export const generateMetadata = (): Metadata => ({
	metadataBase: new URL(siteConfig.url()),
	title: {
		default: siteConfig.title,
		template: `%s | ${siteConfig.title}`,
	},
	description: siteConfig.description,
	keywords: siteConfig.keywords(),
	robots: { index: true, follow: true },
	icons: {
		icon: [
			{
				url: '/favicon/favicon-16x16.png',
				sizes: '16x16',
				type: 'image/png',
			},
			{
				url: '/favicon/favicon-32x32.png',
				sizes: '32x32',
				type: 'image/png',
			},
			{
				url: '/favicon/favicon-96x96.png',
				sizes: '96x96',
				type: 'image/png',
			},
			{
				url: '/favicon/android-icon-192x192.png',
				sizes: '192x192',
				type: 'image/png',
			},
		],
		shortcut: '/favicon/favicon-16x16.png',
		apple: [
			{ url: '/favicon/apple-icon-57x57.png', sizes: '57x57' },
			{ url: '/favicon/apple-icon-60x60.png', sizes: '60x60' },
			{ url: '/favicon/apple-icon-72x72.png', sizes: '72x72' },
			{ url: '/favicon/apple-icon-76x76.png', sizes: '76x76' },
			{ url: '/favicon/apple-icon-114x114.png', sizes: '114x114' },
			{ url: '/favicon/apple-icon-120x120.png', sizes: '120x120' },
			{ url: '/favicon/apple-icon-144x144.png', sizes: '144x144' },
			{ url: '/favicon/apple-icon-152x152.png', sizes: '152x152' },
			{ url: '/favicon/apple-icon-180x180.png', sizes: '180x180' },
		],
	},
	verification: {
		// google: siteConfig.googleSiteVerificationId(),
	},
	openGraph: {
		url: siteConfig.url(),
		title: siteConfig.title,
		description: siteConfig.description,
		siteName: siteConfig.title,
		images: [
			{
				url: '/images/logo-og.png',
				width: 1200,
				height: 630,
				alt: 'Asmi',
			},
		],
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: siteConfig.title,
		description: siteConfig.description,
		images: '/favicon/apple-icon.png',
	},
});

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={cn('font-urbanist min-h-screen', fonts)}>
				<Providers>{children}</Providers>
				{/* <Script
					async
					src="https://www.googletagmanager.com/gtag/js?id=AW-16492952746"
					strategy="afterInteractive"
				/>
				<Script id="gtag-init" strategy="afterInteractive">
					{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'AW-16492952746');
				`}
				</Script> */}
			</body>
		</html>
	);
};

export default RootLayout;
