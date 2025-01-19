/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			animation: {
				'slide-in-left': 'slideInLeft 2s ease-out forwards', // Adding the custom animation
				'slide-in-right': 'slideInRight 2s ease-out forwards', // Adding custom slide-in-right animation
				'slide-bounce': 'slideBounce 2s ease-out', // Add the bounce and slide animation
				'slide-from-top': 'slideFromTop 1s ease-out' // Animation for sliding from top
			},
			keyframes: {
				slideInLeft: {
					'0%': {
						transform: 'translateX(-100%)', // Start from off-screen to the left
					},
					'100%': {
						transform: 'translateX(0)', // End at the normal position
					},
				},

				slideInRight: {
					'0%': {
						transform: 'translateX(100%)', // Start from off-screen to the right
					},
					'100%': {
						transform: 'translateX(0)', // End at the normal position
					},
				},
				slideBounce: {
					'0%': {
						transform: 'translate(-100%, -100%)', // Starts from top right corner
						opacity: '0',
					},
					'50%': {
						transform: 'translate(10%, 10%)', // Bounces a little
						opacity: '1',
					},
					'100%': {
						transform: 'translate(0, 0)', // Ends at the normal position
						opacity: '1',
					},
				},
				slideFromTop: {
					'0%': {
						transform: 'translateY(-100%)', // Starts from above the element (offscreen)
						opacity: '0',
					},
					'100%': {
						transform: 'translateY(0)', // Ends at the normal position
						opacity: '1',
					},
				},
			},
		}
	},
	plugins: [require("tailwindcss-animate"), require('daisyui')],
}