/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-lines-per-function */

import NewFooter from '../../../components/footer';

import Nav from '@/components/nav';

export const metadata = {
	title: 'Privacy Policy | Asmi AI',
	description:
		'Learn how Asmi AI collects, uses, and protects your personal information. Read our comprehensive privacy policy.',
	openGraph: {
		title: 'Privacy Policy | Asmi AI',
		description:
			'Learn how Asmi AI collects, uses, and protects your personal information. Read our comprehensive privacy policy.',
		url: 'https://www.asmiai.com/privacy',
		type: 'website',
	},
};

export default function PrivacyPolicy() {
	return (
		<main className="min-h-screen bg-[#0B0B0B]">
			<Nav showButton={false} />
			<div className="relative z-10 mx-auto max-w-7xl py-32 text-white">
				<h1 className="mb-2 text-3xl font-bold">
					Privacy Policy for Asmi AI
				</h1>
				<p className="mb-8 text-sm text-gray-400">
					Effective Date: June 3, 2025
				</p>

				<div className="space-y-6">
					<p>
						<strong>Company Name:</strong> Humint Labs, Inc.
					</p>
					<p>
						<strong>Brand Name:</strong> Asmi AI
					</p>
					<p>
						<strong>Website:</strong>{' '}
						<a
							href="https://www.asmiai.com"
							className="text-[#5DFF9F] transition-colors hover:underline"
							target="_blank"
							rel="noopener noreferrer"
						>
							www.asmiai.com
						</a>
					</p>
					<p>
						<strong>Registered Address:</strong> 879 Rattan Terrace,
						Sunnyvale, CA 94086, USA
					</p>
					<p>
						<strong>Contact Email:</strong>{' '}
						<a
							href="mailto:support@asmiai.com"
							className="text-[#5DFF9F] hover:underline"
						>
							support@asmiai.com
						</a>
					</p>
				</div>

				<section className="mt-10 space-y-8">
					<h2 className="text-2xl font-semibold">1. Introduction</h2>
					<p>
						Humint Labs, Inc. ("we," "our," or "us") values your
						privacy and is committed to protecting it. This Privacy
						Policy describes how we collect, use, store, and
						disclose your personal information when you use Asmi AI
						via WhatsApp, iMessage, our website or app.
					</p>
					<p>
						By using Asmi AI, you agree to the practices described
						in this Privacy Policy.
					</p>

					<h2 className="text-2xl font-semibold">
						2. Information We Collect
					</h2>
					<div>
						<h3 className="font-semibold">
							A. Personal Information
						</h3>
						<ul className="ml-4 list-inside list-disc">
							<li>Name, phone number, and email address</li>
							<li>
								Contacts you interact with (only with user
								permission)
							</li>
							<li>
								Calendar event data (Google, Outlook, Apple)
							</li>
							<li>
								Content shared with Asmi via WhatsApp (text,
								voice notes, images, and metadata)
							</li>
						</ul>
					</div>
					<div>
						<h3 className="font-semibold">
							B. Technical Information
						</h3>
						<ul className="ml-4 list-inside list-disc">
							<li>Device identifiers and browser type</li>
							<li>Usage logs and interaction timestamps</li>
						</ul>
					</div>
					<div>
						<h3 className="font-semibold">
							C. Voice and Message Data
						</h3>
						<p>
							Voice notes and texts you send to Asmi are used to
							power memory, reminders, scheduling, and brief
							generation. These are processed and stored securely
							to improve user experience.
						</p>
					</div>

					<h2 className="text-2xl font-semibold">
						3. How We Use Your Information
					</h2>
					<ul className="ml-4 list-inside list-disc">
						<li>
							Provide and improve Asmi’s memory, scheduling, and
							assistant features
						</li>
						<li>Analyze usage to improve functionality</li>
						<li>Deliver proactive insights and reminders</li>
						<li>
							Sync with calendar/contact apps per user permission
						</li>
						<li>
							Prevent abuse and ensure compliance with platform
							terms
						</li>
					</ul>

					<h2 className="text-2xl font-semibold">
						4. Sharing and Disclosure
					</h2>
					<p>We do not sell your personal information.</p>
					<p>We may share data with:</p>
					<ul className="ml-4 list-inside list-disc">
						<li>
							Infrastructure providers (e.g., AWS, Google Cloud)
						</li>
						<li>
							Third-party APIs (e.g., WhatsApp, OpenAI, Google
							Calendar) under secure data-sharing terms
						</li>
						<li>Analytics tools for product improvement</li>
						<li>Law enforcement where required by law</li>
					</ul>
					<p>
						All integrations comply with Meta's, Google’s, and
						Apple’s developer terms.
					</p>

					<h2 className="text-2xl font-semibold">
						5. Your Rights & Controls
					</h2>
					<p>You can:</p>
					<ul className="ml-4 list-inside list-disc">
						<li>Request a copy of your data</li>
						<li>Ask to correct or delete information</li>
						<li>Revoke any third-party integrations</li>
						<li>Opt out of non-essential communications</li>
					</ul>
					<p>
						To exercise your rights, email{' '}
						<a
							href="mailto:support@asmiai.com"
							className="text-[#5DFF9F] hover:underline"
						>
							support@asmiai.com
						</a>
						.
					</p>

					<h2 className="text-2xl font-semibold">6. Data Security</h2>
					<ul className="ml-4 list-inside list-disc">
						<li>Data encrypted in transit and at rest</li>
						<li>Role-based access controls</li>
						<li>Hosted on SOC 2-compliant infrastructure</li>
						<li>
							WhatsApp messages processed via Meta’s secure APIs
						</li>
					</ul>

					<h2 className="text-2xl font-semibold">
						7. Data Retention
					</h2>
					<p>
						We retain personal data as long as your account is
						active or as needed to provide services. You may request
						deletion at any time.
					</p>

					<h2 className="text-2xl font-semibold">
						8. International Data Transfers
					</h2>
					<p>
						Asmi AI is based in the United States. By using our
						services, you consent to data being processed and stored
						in the U.S.
					</p>

					<h2 className="text-2xl font-semibold">
						9. Children's Privacy
					</h2>
					<p>
						Asmi AI is not intended for individuals under 13. We do
						not knowingly collect data from children.
					</p>

					<h2 className="text-2xl font-semibold">
						10. California Privacy Rights (CCPA)
					</h2>
					<p>California users may:</p>
					<ul className="ml-4 list-inside list-disc">
						<li>Request disclosure of data collected</li>
						<li>Request deletion</li>
						<li>Opt-out of certain data-sharing practices</li>
					</ul>
					<p>
						To exercise CCPA rights, contact us at{' '}
						<a
							href="mailto:support@asmiai.com"
							className="text-[#5DFF9F] hover:underline"
						>
							support@asmiai.com
						</a>
						.
					</p>

					<h2 className="text-2xl font-semibold">
						11. Compliance with Platform Policies
					</h2>
					<p>We comply with:</p>
					<ul className="ml-4 list-inside list-disc">
						<li>WhatsApp Business and Developer Terms</li>
						<li>Meta Platform Policies</li>
						<li>
							Google, Outlook, and Apple API privacy requirements
						</li>
					</ul>
					<p>Only data explicitly shared by users is processed.</p>

					<h2 className="text-2xl font-semibold">
						12. Changes to This Policy
					</h2>
					<p>
						We may update this Privacy Policy. Changes will be
						posted on our website and/or communicated via WhatsApp.
					</p>

					<h2 className="text-2xl font-semibold">13. Contact Us</h2>
					<address className="not-italic">
						Humint Labs, Inc.
						<br />
						879 Rattan Terrace,
						<br />
						Sunnyvale, CA 94086, USA
						<br />
						📧{' '}
						<a
							href="mailto:support@asmiai.com"
							className="text-[#5DFF9F] hover:underline"
						>
							support@asmiai.com
						</a>
						<br />
						📞 +1 (412) 557-1267
					</address>
				</section>
			</div>
			<NewFooter />
		</main>
	);
}
