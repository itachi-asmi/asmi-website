import NewFooter from '../../../components/footer';
import BackButton from './_ui/back';
import WaitlistId from './_ui/wishlist-id';

import Nav from '@/components/nav';
import { Slider } from '@/components/slider';
import { WaitlistNames } from '@/helpers/constant';

export const revalidate = 60;

// const testimonials = [
// 	{
// 		name: 'Steve Chen',
// 		role: 'Founder, Youtube',
// 		image: '/images/Setve.png',
// 		gradient: 'from-asmi-500 to-asmi-700',
// 		quote: '“Love the idea! I’ve always dreamed of a tool that captures my thoughts and surroundings, organizing them with AI. Asmi brings that vision to life—it’s like having a digital memory that thinks for me.”',
// 	},
// 	{
// 		name: 'Lalit',
// 		role: 'Founder, Groww',
// 		image: '/images/Lalit.png',
// 		gradient: 'from-pink-500 to-purple-600',
// 		quote: '"Asmi’s Personal Assistant is a game-changer for founders like me. It intuitively understands my day, decisions, and priorities—I’d absolutely pay for this."',
// 	},
// 	{
// 		name: 'Nandan',
// 		role: 'Founder, Swiggy',
// 		image: '/images/nandan.png',
// 		gradient: 'from-amber-500 to-orange-600',
// 		quote: '"Asmi feels deeply personal and incredibly useful—like a thinking partner that just gets you. If anyone can turn this into a global habit, it’s this team."',
// 	},
// ];

export default async function Waitlist() {
	return (
		<div className="min-h-screen bg-[#0B0B0B]">
			<Nav showButton={false} />
			<main className="p-4">
				<div className="container mx-auto max-w-6xl">
					<BackButton />
					<div className="glass-card mb-16 rounded-2xl bg-gradient-to-r p-8 text-center text-white shadow-lg md:p-12">
						<h2 className="animate-fade-in mb-6 text-3xl font-bold md:text-4xl">
							Welcome, Superstar.
						</h2>
						<div className="mb-4 flex flex-col items-center justify-center text-xl leading-9 md:flex-row md:gap-1 md:text-2xl ">
							<span>You&apos;ll soon be part of the same </span>
							<span className="relative -left-[32px] md:left-0">
								tribe as{' '}
								<span className="relative ml-2 inline-block align-baseline">
									<Slider
										data={WaitlistNames}
										className="absolute inset-x-0 -top-[29px] text-center text-3xl font-semibold"
									/>
								</span>
							</span>
						</div>
						<WaitlistId />
						<div className="animate-[pulse_3s_ease-in-out_infinite]">
							<p className="relative inline-block text-2xl font-medium">
								<span className="animate-[float_4s_ease-in-out_infinite]">
									Stay tuned!
								</span>
								<span className="absolute -bottom-2 left-0 h-0.5 w-full animate-[shimmer_3s_ease-in-out_infinite] bg-white opacity-70"></span>
							</p>
						</div>
					</div>

					{/* <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
						{testimonials.map((t) => (
							<TestimonialCard
								key={t.name}
								name={t.name}
								role={t.role}
								image={t.image}
								gradient={t.gradient}
								quote={t.quote}
							/>
						))}
					</div> */}
				</div>
			</main>
			<NewFooter />
		</div>
	);
}
