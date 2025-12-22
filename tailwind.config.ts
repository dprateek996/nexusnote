import type { Config } from 'tailwindcss'
const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
	let allColors = theme("colors");
	let newVars = Object.fromEntries(
		Object.entries(allColors).flatMap(([color, values]) => {
			// If the color value is a string (e.g. 'purple': '#800080'), convert to one variable
			if (typeof values === 'string') {
				return [[`--${color}`, values]];
			}
			// If it's an object (e.g. 'slate': { 50: '#...', 100: '#...' }), flatten it
			return Object.entries(values as Record<string, string>).map(([key, val]) => [
				`--${color}-${key}`,
				val,
			]);
		})
	);

	addBase({
		":root": newVars,
	});
}

const config: Config = {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
	],

	theme: {
		extend: {
			// Shadcn UI Colors
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				rosewater: {
					50: '#fdf2f2',
					100: '#fde8e8',
					200: '#fbd5d5',
					300: '#f8b4b4',
					400: '#f98080',
					500: '#eab3b1', // Primary Rosewater
					600: '#e02424',
					700: '#c81e1e',
					800: '#9b1c1c',
					900: '#771d1d',
					DEFAULT: '#eab3b1',
				},
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

			// Aceternity UI Animations
			animation: {
				// Background Beams
				"background-beams": "background-beams 8s ease infinite",
				"background-beams-slow": "background-beams 15s ease infinite",

				// Moving Border / Gradient
				"spin-slow": "spin 8s linear infinite",
				"border-beam": "border-beam 4s linear infinite",
				"moving-border": "moving-border 4s linear infinite",

				// Spotlight
				"spotlight": "spotlight 2s ease .75s 1 forwards",

				// Shimmer
				"shimmer": "shimmer 2s linear infinite",

				// Fade & Slide animations
				"fade-in": "fade-in 0.5s ease-out forwards",
				"fade-in-up": "fade-in-up 0.5s ease-out forwards",
				"fade-in-down": "fade-in-down 0.5s ease-out forwards",
				"slide-in-left": "slide-in-left 0.5s ease-out forwards",
				"slide-in-right": "slide-in-right 0.5s ease-out forwards",

				// Scale animations
				"scale-in": "scale-in 0.3s ease-out forwards",
				"scale-up": "scale-up 0.2s ease-out",

				// Pulse & Glow
				"pulse-glow": "pulse-glow 2s ease-in-out infinite",
				"glow": "glow 2s ease-in-out infinite alternate",

				// Aurora effect
				"aurora": "aurora 60s linear infinite",

				// Meteor effect
				"meteor": "meteor 5s linear infinite",

				// Accordion
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},

			keyframes: {
				// Background Beams
				"background-beams": {
					"0%, 100%": {
						backgroundPosition: "0% 50%"
					},
					"50%": {
						backgroundPosition: "100% 50%"
					}
				},

				// Border Beam (moving gradient border)
				"border-beam": {
					"100%": {
						"offset-distance": "100%"
					}
				},

				// Moving Border
				"moving-border": {
					"0%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
					"100%": { backgroundPosition: "0% 50%" }
				},

				// Spotlight
				"spotlight": {
					"0%": {
						opacity: "0",
						transform: "translate(-72%, -62%) scale(0.5)"
					},
					"100%": {
						opacity: "1",
						transform: "translate(-50%, -40%) scale(1)"
					}
				},

				// Shimmer
				"shimmer": {
					"0%": { backgroundPosition: "-200% 0" },
					"100%": { backgroundPosition: "200% 0" }
				},

				// Fade animations
				"fade-in": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" }
				},
				"fade-in-up": {
					"0%": { opacity: "0", transform: "translateY(20px)" },
					"100%": { opacity: "1", transform: "translateY(0)" }
				},
				"fade-in-down": {
					"0%": { opacity: "0", transform: "translateY(-20px)" },
					"100%": { opacity: "1", transform: "translateY(0)" }
				},

				// Slide animations
				"slide-in-left": {
					"0%": { opacity: "0", transform: "translateX(-20px)" },
					"100%": { opacity: "1", transform: "translateX(0)" }
				},
				"slide-in-right": {
					"0%": { opacity: "0", transform: "translateX(20px)" },
					"100%": { opacity: "1", transform: "translateX(0)" }
				},

				// Scale animations
				"scale-in": {
					"0%": { opacity: "0", transform: "scale(0.9)" },
					"100%": { opacity: "1", transform: "scale(1)" }
				},
				"scale-up": {
					"0%": { transform: "scale(1)" },
					"100%": { transform: "scale(1.05)" }
				},

				// Pulse glow
				"pulse-glow": {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.5" }
				},

				// Glow effect
				"glow": {
					"0%": { boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)" },
					"100%": { boxShadow: "0 0 30px rgba(147, 51, 234, 0.6)" }
				},

				// Aurora effect
				"aurora": {
					"0%": { backgroundPosition: "50% 50%, 50% 50%" },
					"100%": { backgroundPosition: "350% 50%, 350% 50%" }
				},

				// Meteor effect
				"meteor": {
					"0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
					"70%": { opacity: "1" },
					"100%": { transform: "rotate(215deg) translateX(-500px)", opacity: "0" }
				},

				// Accordion
				"accordion-down": {
					"0%": { height: "0" },
					"100%": { height: "var(--radix-accordion-content-height)" }
				},
				"accordion-up": {
					"0%": { height: "var(--radix-accordion-content-height)" },
					"100%": { height: "0" }
				},
			},

			// Background utilities
			backgroundSize: {
				'size-200': '200% 200%',
				'size-400': '400% 400%',
			},
			backgroundPosition: {
				'pos-0': '0% 0%',
				'pos-100': '100% 100%',
			},

			// Border radius
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},

			// Font family extension
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},

			// Box shadow for glassmorphism and depth
			boxShadow: {
				'glow-sm': '0 0 10px rgba(147, 51, 234, 0.3)',
				'glow-md': '0 0 20px rgba(147, 51, 234, 0.4)',
				'glow-lg': '0 0 30px rgba(147, 51, 234, 0.5)',
				'inner-glow': 'inset 0 0 20px rgba(255, 255, 255, 0.1)',
			},
		}
	},

	plugins: [
		require('@tailwindcss/typography'),
		require('tailwindcss-animate'),
		addVariablesForColors, // Add Aceternity plugin
	],
}

export default config