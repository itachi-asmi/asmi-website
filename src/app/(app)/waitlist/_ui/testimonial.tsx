import React from 'react';

const TestimonialCard = ({
	name,
	role,
	image,
	gradient,
	quote,
}: {
	name: string;
	role: string;
	image: string;
	gradient: string;
	quote: string;
}) => (
	<div className="rounded-2xl bg-white p-6 shadow-xl transition-transform duration-300 hover:-translate-y-1">
		<div className="flex flex-col gap-6">
			<div className="w-full">
				<div className="relative">
					<div
						className={`aspect-square size-20 overflow-hidden rounded-full border-2 border-white shadow-md ${gradient}`}
					>
						<img
							src={image}
							alt={name}
							className="size-full object-cover"
						/>
					</div>
					<div className="absolute -bottom-2 -right-2 rounded-full bg-white p-1 shadow-md">
						<div className="rounded-full bg-blue-500 p-1">
							<svg
								className="size-3 text-white"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.688 1.943-1.99 1.943-3.484v-.001z" />
							</svg>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full">
				<blockquote className="mb-4 text-lg font-medium text-gray-800">
					{quote}
				</blockquote>
				<div>
					<p className="font-semibold text-gray-900">{name}</p>
					<p className="text-sm text-gray-600">{role}</p>
				</div>
			</div>
		</div>
	</div>
);

export default TestimonialCard;
