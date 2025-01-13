/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Enabling JIT mode for faster compilation
  mode: 'jit',
  // Purge configuration for production
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
      './index.html'
    ],
    options: {
      safelist: [
        'animate-spin',
        'animate-pulse',
        'animate-bounce',
        'animate-ping',
        'animate-marquee',
        'animate-zoom',
        'fade-in',
        'slide-in',
        /^bg-/,
        /^text-/,
        /^border-/,
        /^hover:/,
        /^focus:/,
        /^lg:/,
        /^md:/,
        /^sm:/,
        /^xl:/,
        'group-hover:',
      ],
    }
  },
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Blue-800
        'primary-dark': '#1E3A8A', // Blue-900
        'primary-light': '#3B82F6', // Blue-500
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 60s linear infinite',
        'zoom': 'zoom 20s infinite alternate',
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-in': 'slideIn 0.5s ease-in',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        zoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      // Container configurations
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      // Custom max-widths for better mobile control
      maxWidth: {
        'mobile': '640px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
    },
    // Breakpoint configurations
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      // Custom breakpoints for specific device sizes
      'mobile': '375px',
      'mobile-lg': '425px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    // Custom plugin for responsive paddings
    function({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1280px',
          },
        }
      })
    },
  ],
  // Future flag configurations
  future: {
    hoverOnlyWhenSupported: true,
    respectDefaultRingColorOpacity: true,
    disableColorOpacityUtilitiesByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  // Experimental features
  experimental: {
    optimizeUniversalDefaults: true,
  },
  // Variants configuration
  variants: {
    extend: {
      backgroundColor: ['active', 'group-hover'],
      textColor: ['active', 'group-hover'],
      opacity: ['disabled'],
      cursor: ['disabled'],
      borderWidth: ['hover', 'focus'],
      scale: ['group-hover'],
      transform: ['group-hover'],
      // Mobile-specific variants
      padding: ['responsive'],
      margin: ['responsive'],
      fontSize: ['responsive'],
      display: ['responsive'],
      width: ['responsive'],
      height: ['responsive'],
    },
  },
};