import { create } from 'zustand';

interface IProps {
	waitlistId: string | null;
	setWaitlistId: (id: string) => void;
	clearWaitlistId: () => void;
}

export const useUiStore = create<IProps>((set) => ({
	waitlistId: null,
	setWaitlistId: (id) => set({ waitlistId: id }),
	clearWaitlistId: () => set({ waitlistId: null }),
}));
