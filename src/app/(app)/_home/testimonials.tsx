import React from 'react';
import { Quote, Star } from 'lucide-react';

const TestimonialCard = ({
	quote,
	author,
	role,
}: {
	quote: string;
	author: string;
	role: string;
}) => {
	return (
		<div className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md">
			<div className="mb-4 flex">
				{[1, 2, 3, 4, 5].map((star) => (
					<Star
						key={star}
						size={16}
						className="mr-1 fill-yellow-400 text-yellow-400"
					/>
				))}
			</div>
			<div className="relative">
				<Quote className="text-asmi-100 absolute -left-2 -top-2 size-8 opacity-50" />
				<p className="relative z-10 mb-6 italic text-gray-700">
					{quote}
				</p>
			</div>
			<div>
				<p className="font-medium text-gray-900">{author}</p>
				<p className="text-sm text-gray-500">{role}</p>
			</div>
		</div>
	);
};

const TestimonialsSection = () => {
	const testimonials = [
		{
			quote: 'Asmi feels like the first AI that actually knows me. I speak freely, and it just gets things done.',
			author: 'Alex Morgan',
			role: 'Remote Founder, Beta User',
		},
		{
			quote: 'I stopped using 5 other apps. Asmi is like a silent co-pilot for my brain.',
			author: 'Jamie Lee',
			role: 'Therapist & Coach',
		},
		{
			quote: "The voice interface is so natural, I forget I'm talking to an AI. It's changed how I manage my day.",
			author: 'Chris Johnson',
			role: 'Product Designer',
		},
		{
			quote: 'No more juggling between calendar, notes, and task apps. Asmi handles everything seamlessly.',
			author: 'Taylor Wilson',
			role: 'Marketing Executive',
		},
	];

	return (
		<section id="testimonials" className="bg-gray-50 px-4 py-20">
			<div className="container mx-auto">
				<div className="mb-16 text-center">
					<h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
						Loved by Early Users
					</h2>
					<p className="mx-auto max-w-2xl text-xl text-gray-600">
						Here&apos;s what people are saying about their
						experience with Asmi
					</p>
				</div>

				<div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
					{testimonials.map((testimonial, index) => (
						<TestimonialCard
							key={index}
							quote={testimonial.quote}
							author={testimonial.author}
							role={testimonial.role}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;
