import React from 'react';

const Header = () => {
	return (
		<header className="z-50 w-full px-4 py-6 md:px-8 lg:px-12">
			<div className="container mx-auto flex items-center justify-between">
				<div className="flex items-center">
					{/* <h1 className="text-asmi-600 text-2xl font-bold">Asmi</h1> */}
					<img
						src="/images/logo.png"
						alt="Asmi Logo"
						className="h-10 w-auto"
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
