import React, { useState } from 'react';
import { MenuIcon } from 'lucide-react';

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '../../shared/dialog';
import Menu from './menu';

const MobileMenu = () => {
	const [open, setOpen] = useState(false);

	return (
		<Dialog open={open} onOpenChange={() => setOpen(!open)}>
			<DialogTrigger>
				<MenuIcon />
			</DialogTrigger>
			<DialogContent>
				<DialogTitle />
				<DialogHeader>
					<DialogDescription className="mx-16">
						<Menu open={open} setOpen={setOpen} />
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

export default MobileMenu;
