import type { Config } from 'tailwindcss';

const config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: '',
	theme: {
		fontFamily: {
			urbanist: ['var(--font-urbanist)'],
		},
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				'general-sans': ['General Sans', 'Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				// New neon color scheme
				neonGreen: '#5DFF9F',
				neonPurple: '#A07CFE',
				darkBg: '#0B0B0B',
				darkCard: '#0D0D0D',
				asmi: {
					50: '#f5f3ff',
					100: '#ede9fe',
					200: '#ddd6fe',
					300: '#c4b5fd',
					400: '#a78bfa',
					500: '#8b5cf6',
					600: '#7c3aed',
					700: '#6d28d9',
					800: '#5b21b6',
					900: '#4c1d95',
					950: '#2e1065',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0',
					},
					to: {
						height: 'var(--radix-accordion-content-height)',
					},
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)',
					},
					to: {
						height: '0',
					},
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
				'gradient-shift': {
					'0%, 100%': {
						'background-position': '0% 50%',
					},
					'50%': {
						'background-position': '100% 50%',
					},
				},
				'glow-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(93, 255, 159, 0.3)',
					},
					'50%': {
						boxShadow: '0 0 30px rgba(93, 255, 159, 0.5)',
					},
				},
				'particle-float': {
					'0%, 100%': {
						transform: 'translateY(0px) rotate(0deg)',
					},
					'33%': {
						transform: 'translateY(-15px) rotate(1deg)',
					},
					'66%': {
						transform: 'translateY(-5px) rotate(-1deg)',
					},
				},
				meteor: {
					'0%': {
						transform: 'rotate(215deg) translateX(0)',
						opacity: '1',
					},
					'70%': { opacity: '1' },
					'100%': {
						transform: 'rotate(215deg) translateX(-500px)',
						opacity: '0',
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-up': 'slide-up 0.4s ease-out',
				'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'particle-float': 'particle-float 6s ease-in-out infinite',
				float: 'float 3s ease-in-out infinite',
				'meteor-effect': 'meteor 5s linear infinite',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'purple-gradient':
					'linear-gradient(to right, #8b5cf6, #7c3aed)',
				'hero-pattern':
					'url("/public/lovable-uploads/8f1e0186-4660-4f70-9ec1-d42871d38989.png")',
			},
			boxShadow: {
				base: '0px 0px 1px rgba(40, 41, 61, 0.08), 0px 0.5px 2px rgba(96, 97, 112, 0.16)',
				base2: '0px 2px 4px rgba(40, 41, 61, 0.04), 0px 8px 16px rgba(96, 97, 112, 0.16)',
				base3: '16px 10px 40px rgba(15, 23, 42, 0.22)',
				deep: '-2px 0px 8px rgba(0, 0, 0, 0.16)',
				dropdown: '0px 4px 8px rgba(0, 0, 0, 0.08)',
				testi: '0px 4px 24px rgba(0, 0, 0, 0.06)',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
