module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        h5: '0.83em',
        h1: '2em',
        m: '1.5rem',
        xs: '0.8rem',
      },
      height: {
        '38': '38rem',
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      colors: {
        'light-gray': 'hsl(229, 24%, 87%)',
        'cool-gray': 'hsl(231, 11%, 63%)',
        'marine-blue': 'hsl(213, 96%, 18%)',
        'button-hover-blue': 'hsl(213, 96%, 30%)',
        'magnolia': 'hsl(217, 100%, 97%)',
        'alabaster': 'hsl(231, 100%, 99%)',
        'purplish-blue': 'hsl(243, 100%, 62%)',
        'pastel-blue': 'hsl(228, 100%, 84%)',
        'light-blue': 'hsl(206, 94%, 87%)',
      },
      backgroundImage: {
        'desktop-sidebar': "url('/src/assets/images/bg-sidebar-desktop.svg')",
        'mobile-sidebar' : "url('/src/assets/images/bg-sidebar-mobile.svg')"
      },
      screens : {
        'xs' : '320px',
        'sm' : '670px',
        'lg' : '1350px',
      }
    },
  },
  plugins: [],
};
