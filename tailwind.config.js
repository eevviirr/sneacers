/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-pattern': "url('../src/assets/heroBg.jpg')",
				'exiting-pattern': "url('../src/assets/trendSetting__photo__1.png')"
			},
			width: {
				500: '500px',
				200: '200%'
			},
			spacing: {
				xl: '100%'
			},

			keyframes: {
				moving: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' }
				}
			},
			animation: {
				moving: 'moving 10s linear infinite'
			}
		},
		container: {
			center: true,
			screens: {
				mobile: '640px',
				tablet: '960px',
				desktop: '1200px'
			}
		},
		fontFamily: {
			sans: ['ui-sans-serif', 'system-ui'],
			serif: ['ui-serif', 'Georgia'],
			mono: ['ui-monospace', 'SFMono-Regular'],
			montserrat: ['Montserrat'],
			display: ['Oswald'],
			body: ['"Open Sans"']
		},
		fontSize: {
			sm: '0.8rem',
			base: '1rem',
			title: '72px',
			subTitle: '26px',
			xl: '1.25rem',
			'2xl': '1.563rem',
			'3xl': '1.953rem',
			'4xl': '2.441rem',
			'5xl': '3.052rem'
		}
	},
	plugins: []
};
