// /** @type {import('tailwindcss').Config} */
// module.exports = {
// 	darkMode: ['class'],
// 	content: [
// 		'./pages/**/*.{ts,tsx}',
// 		'./components/**/*.{ts,tsx}',
// 		'./app/**/*.{ts,tsx}',
// 		'./src/**/*.{ts,tsx}',
// 	],
// 	theme: {
// 		container: {
// 			center: true,
// 			padding: '2rem',
// 			screens: {
// 				'2xl': '1400px',
// 			},
// 		},
// 		extend: {
// 			colors: {
// 				// Jarvis-style futuristic color palette
// 				jarvis: {
// 					primary: '#00D4FF',    // Electric Blue
// 					secondary: '#00FFFF',   // Cyan
// 					accent: '#0099FF',      // Neon Blue
// 					black: '#000000',       // Deep Black
// 					gray: {
// 						50: '#f8f9fa',
// 						100: '#f1f3f4',
// 						200: '#e8eaed',
// 						300: '#dadce0',
// 						400: '#bdc1c6',
// 						500: '#9aa0a6',
// 						600: '#80868b',
// 						700: '#5f6368',
// 						800: '#3c4043',
// 						900: '#202124',
// 						950: '#111111',       // Dark Gray
// 					},
// 					light: '#333333',       // Light Gray
// 					white: '#FFFFFF',       // White
// 					glow: '#00D4FF',        // Glow effect color
// 				},
// 				// Legacy colors for compatibility
// 				border: 'hsl(var(--border))',
// 				input: 'hsl(var(--input))',
// 				ring: 'hsl(var(--ring))',
// 				background: 'hsl(var(--background))',
// 				foreground: 'hsl(var(--foreground))',
// 				primary: {
// 					DEFAULT: '#00D4FF',
// 					foreground: '#000000',
// 				},
// 				secondary: {
// 					DEFAULT: '#00FFFF',
// 					foreground: '#000000',
// 				},
// 				accent: {
// 					DEFAULT: '#0099FF',
// 					foreground: '#FFFFFF',
// 				},
// 				destructive: {
// 					DEFAULT: 'hsl(var(--destructive))',
// 					foreground: 'hsl(var(--destructive-foreground))',
// 				},
// 				muted: {
// 					DEFAULT: 'hsl(var(--muted))',
// 					foreground: 'hsl(var(--muted-foreground))',
// 				},
// 				popover: {
// 					DEFAULT: 'hsl(var(--popover))',
// 					foreground: 'hsl(var(--popover-foreground))',
// 				},
// 				card: {
// 					DEFAULT: 'hsl(var(--card))',
// 					foreground: 'hsl(var(--card-foreground))',
// 				},
// 			},
// 			fontFamily: {
// 				'orbitron': ['Orbitron', 'monospace'],
// 				'exo2': ['Exo 2', 'sans-serif'],
// 				'sans': ['Inter', 'sans-serif'],
// 				'mono': ['JetBrains Mono', 'monospace'],
// 			},
// 			borderRadius: {
// 				lg: 'var(--radius)',
// 				md: 'calc(var(--radius) - 2px)',
// 				sm: 'calc(var(--radius) - 4px)',
// 			},
// 			boxShadow: {
// 				'glow-sm': '0 0 10px #00D4FF',
// 				'glow': '0 0 20px #00D4FF',
// 				'glow-lg': '0 0 30px #00D4FF',
// 				'glow-xl': '0 0 40px #00D4FF',
// 				'glow-cyan': '0 0 20px #00FFFF',
// 				'glow-blue': '0 0 20px #0099FF',
// 			},
// 			animation: {
// 				'accordion-down': 'accordion-down 0.2s ease-out',
// 				'accordion-up': 'accordion-up 0.2s ease-out',
// 				'float': 'float 6s ease-in-out infinite',
// 				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
// 				'glitch': 'glitch 2s infinite',
// 				'scan': 'scan 2s linear infinite',
// 				'typing': 'typing 3.5s steps(40, end) 1s forwards',
// 				'particle-float': 'particle-float 8s linear infinite',
// 				'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
// 				'slide-in-left': 'slide-in-left 0.6s ease-out forwards',
// 				'slide-in-right': 'slide-in-right 0.6s ease-out forwards',
// 			},
// 			keyframes: {
// 				'accordion-down': {
// 					from: { height: 0 },
// 					to: { height: 'var(--radix-accordion-content-height)' },
// 				},
// 				'accordion-up': {
// 					from: { height: 'var(--radix-accordion-content-height)' },
// 					to: { height: 0 },
// 				},
// 				float: {
// 					'0%, 100%': { transform: 'translateY(0px)' },
// 					'50%': { transform: 'translateY(-20px)' },
// 				},
// 				'pulse-glow': {
// 					'0%, 100%': { 
// 						boxShadow: '0 0 5px #00D4FF, 0 0 10px #00D4FF, 0 0 15px #00D4FF',
// 						opacity: '1'
// 					},
// 					'50%': { 
// 						boxShadow: '0 0 10px #00D4FF, 0 0 20px #00D4FF, 0 0 30px #00D4FF',
// 						opacity: '0.8'
// 					},
// 				},
// 				glitch: {
// 					'0%': { transform: 'translate(0)' },
// 					'20%': { transform: 'translate(-2px, 2px)' },
// 					'40%': { transform: 'translate(-2px, -2px)' },
// 					'60%': { transform: 'translate(2px, 2px)' },
// 					'80%': { transform: 'translate(2px, -2px)' },
// 					'100%': { transform: 'translate(0)' },
// 				},
// 				scan: {
// 					'0%': { transform: 'translateX(-100%)' },
// 					'100%': { transform: 'translateX(100vw)' },
// 				},
// 				typing: {
// 					'0%': { width: '0%' },
// 					'100%': { width: '100%' },
// 				},
// 				'particle-float': {
// 					'0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
// 					'10%': { opacity: '1' },
// 					'90%': { opacity: '1' },
// 					'100%': { transform: 'translateY(-100px) rotate(360deg)', opacity: '0' },
// 				},
// 				'fade-in-up': {
// 					'0%': { opacity: '0', transform: 'translateY(50px)' },
// 					'100%': { opacity: '1', transform: 'translateY(0)' },
// 				},
// 				'slide-in-left': {
// 					'0%': { opacity: '0', transform: 'translateX(-50px)' },
// 					'100%': { opacity: '1', transform: 'translateX(0)' },
// 				},
// 				'slide-in-right': {
// 					'0%': { opacity: '0', transform: 'translateX(50px)' },
// 					'100%': { opacity: '1', transform: 'translateX(0)' },
// 				},
// 			},
// 		},
// 	},
// 	plugins: [
// 		require('tailwindcss-animate'),
// 		function({ addUtilities }) {
// 			const newUtilities = {
// 				'.holographic': {
// 					background: 'linear-gradient(45deg, rgba(0, 212, 255, 0.1), rgba(0, 255, 255, 0.1), rgba(0, 153, 255, 0.1))',
// 					backdropFilter: 'blur(10px)',
// 					border: '1px solid rgba(0, 212, 255, 0.3)',
// 					boxShadow: '0 0 20px rgba(0, 212, 255, 0.2)',
// 				},
// 				'.holographic-panel': {
// 					background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(17, 17, 17, 0.9))',
// 					backdropFilter: 'blur(20px)',
// 					border: '1px solid rgba(0, 212, 255, 0.3)',
// 					boxShadow: 'inset 0 0 20px rgba(0, 212, 255, 0.1), 0 0 30px rgba(0, 212, 255, 0.2)',
// 				},
// 				'.glow-border': {
// 					border: '1px solid #00D4FF',
// 					boxShadow: '0 0 10px rgba(0, 212, 255, 0.5), inset 0 0 10px rgba(0, 212, 255, 0.1)',
// 				},
// 				'.neon-text': {
// 					textShadow: '0 0 5px #00D4FF, 0 0 10px #00D4FF, 0 0 15px #00D4FF, 0 0 20px #00D4FF',
// 				},
// 				'.scan-line': {
// 					position: 'relative',
// 					overflow: 'hidden',
// 				},
// 				'.scan-line::before': {
// 					content: '""',
// 					position: 'absolute',
// 					top: '0',
// 					left: '-100%',
// 					width: '100%',
// 					height: '2px',
// 					background: 'linear-gradient(90deg, transparent, #00D4FF, transparent)',
// 					animation: 'scan 2s linear infinite',
// 				},
// 				'.particle': {
// 					position: 'absolute',
// 					width: '2px',
// 					height: '2px',
// 					background: '#00D4FF',
// 					borderRadius: '50%',
// 					opacity: '0.6',
// 					animation: 'particle-float 8s linear infinite',
// 				},
// 			}
// 			addUtilities(newUtilities)
// 		}
// 	],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: { '2xl': '1400px' },
    },
    extend: {
      colors: {
        jarvis: {
          primary: '#D8DBDE',   // chrome silver
          secondary: '#E0E0E0', // light chrome
          accent: '#BFC1C2',    // darker chrome
          black: '#000000',
          white: '#FFFFFF',
          light: '#CFCFCF',
        },
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },

      fontFamily: {
        orbitron: ['Orbitron', 'monospace'],
        exo2: ['Exo 2', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },

      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      boxShadow: {
        chrome: `
          inset 0 12px 24px rgba(255,255,255,0.55),
          inset 0 -28px 48px rgba(0,0,0,0.95),
          0 20px 50px rgba(0,0,0,1)
        `,
        'chrome-soft': `
          inset 0 6px 12px rgba(255,255,255,0.5),
          inset 0 -14px 24px rgba(0,0,0,0.8),
          0 10px 25px rgba(0,0,0,0.9)
        `,
      },

      animation: {
        shine: 'shine 2.5s linear infinite',
      },

      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-150%) skewX(-25deg)' },
          '100%': { transform: 'translateX(250%) skewX(-25deg)' },
        },
      },
    },
  },

  plugins: [
    require('tailwindcss-animate'),

    function ({ addUtilities }) {
      const utilities = {
        /* 🔥 TRUE CHROME SURFACE (matches your reference image) */
        '.chrome': {
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '12px',

          background: `
            radial-gradient(circle at 35% 25%, 
              #ffffff 0%, 
              #f0f0f0 10%, 
              #cfcfcf 22%, 
              #a8a8a8 35%, 
              #7a7a7a 48%, 
              #4a4a4a 62%, 
              #1a1a1a 78%, 
              #000000 100%
            ),
            linear-gradient(120deg, rgba(255,255,255,0.9) 0%, transparent 35%),
            linear-gradient(300deg, rgba(255,255,255,0.4) 0%, transparent 50%)
          `,

          border: '1px solid rgba(255,255,255,0.25)',

          boxShadow: `
            inset 0 12px 24px rgba(255,255,255,0.55),
            inset 0 -28px 48px rgba(0,0,0,0.95),
            0 20px 50px rgba(0,0,0,1)
          `,
        },

        /* ✨ SPECULAR HIGHLIGHT (critical for chrome look) */
        '.chrome::after': {
          content: '""',
          position: 'absolute',
          top: '8%',
          left: '-150%',
          width: '60%',
          height: '80%',
          background:
            'linear-gradient(120deg, transparent, rgba(255,255,255,0.95), transparent)',
          transform: 'skewX(-25deg)',
          filter: 'blur(2px)',
          animation: 'shine 2.5s linear infinite',
        },

        /* ⚪ PERFECT SPHERE (like your image) */
        '.chrome-sphere': {
          borderRadius: '50%',
          position: 'relative',
          overflow: 'hidden',

          background: `
            radial-gradient(circle at 35% 25%, 
              #ffffff 0%, 
              #f0f0f0 8%, 
              #dcdcdc 18%, 
              #bcbcbc 30%, 
              #8a8a8a 45%, 
              #5a5a5a 60%, 
              #2a2a2a 75%, 
              #000000 100%
            )
          `,

          boxShadow: `
            inset -12px -24px 50px rgba(0,0,0,0.95),
            inset 10px 10px 25px rgba(255,255,255,0.7),
            0 25px 60px rgba(0,0,0,1)
          `,
        },

        /* 🔘 CHROME BUTTON */
        '.chrome-button': {
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '10px',
          padding: '12px 24px',
          fontWeight: '600',
          color: '#000',

          background: `
            radial-gradient(circle at 30% 20%, #ffffff, #cfcfcf, #7a7a7a, #1a1a1a)
          `,

          boxShadow: `
            inset 0 8px 16px rgba(255,255,255,0.7),
            inset 0 -12px 24px rgba(0,0,0,0.9),
            0 10px 25px rgba(0,0,0,0.9)
          `,

          transition: 'all 0.3s ease',
        },

        '.chrome-button:hover': {
          transform: 'scale(1.05)',
        },

        /* 🔤 CHROME TEXT */
        '.chrome-text': {
          background:
            'linear-gradient(180deg,#ffffff 0%,#e0e0e0 40%,#888888 60%,#ffffff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        },

        /* 🧊 PANEL */
        '.chrome-panel': {
          background: 'linear-gradient(145deg,#1a1a1a,#2a2a2a)',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 10px 40px rgba(0,0,0,0.9)',
          backdropFilter: 'blur(20px)',
        },
      };

      addUtilities(utilities);
    },
  ],
};