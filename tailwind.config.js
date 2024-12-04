/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        color1: '#ffffff', // blanco
        color2: '#bbbbbb', // grisClaro
        color3: '#85888a', // grisSuave
        color4: '#767276', // grisMedio
        color5: '#535454', // gris
        color6: '#2e2d2e', // grisOscuro
        color7: '#c71518', // rojo
        color8: '#9e0f11', // rojoOscuro
        color9: '#09730f', // verde
      },
      spacing: {
        '0.5': '0.125rem', // 2px
        '1': '0.25rem',    // 4px
        '1.5': '0.375rem', // 6px
        '2': '0.5rem',     // 8px
        '2.5': '0.625rem', // 10px
        '3': '0.75rem',    // 12px
        '3.5': '0.875rem', // 14px
        '4': '1rem',       // 16px
        '5': '1.25rem',    // 20px
        '6': '1.5rem',     // 24px
        '7': '1.75rem',    // 28px
        '8': '2rem',       // 32px
        '9': '2.25rem',    // 36px
        '10': '2.5rem',    // 40px
        '11': '2.75rem',   // 44px
        '12': '3rem',      // 48px
        '14': '3.5rem',    // 56px
        '16': '4rem',      // 64px
        '20': '5rem',      // 80px
        '24': '6rem',      // 96px
        '28': '7rem',      // 112px
        '32': '8rem',      // 128px
        '36': '9rem',      // 144px
        '40': '10rem',     // 160px
        '44': '11rem',     // 176px
        '48': '12rem',     // 192px
        '52': '13rem',     // 208px
        '56': '14rem',     // 224px
        '60': '15rem',     // 240px
        '64': '16rem',     // 256px
        '72': '18rem',     // 288px
        '80': '20rem',     // 320px
        '96': '24rem',     // 384px
      },
      fontSize: {
        'xs': '0.75rem',   // 12px
        'sm': '0.875rem',  // 14px
        'base': '1rem',    // 16px
        'lg': '1.125rem',  // 18px
        'xl': '1.25rem',   // 20px
        '2xl': '1.5rem',   // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem',  // 36px
        '5xl': '3rem',     // 48px
        '6xl': '3.75rem',  // 60px
        '7xl': '4.5rem',   // 72px
      },
      flex: {
        '1': '1 1 0%',
        'auto': '1 1 auto',
        'initial': '0 1 auto',
        'none': 'none',
      },
      flexGrow: {
        '0': '0',
        '1': '1',
      },
      flexShrink: {
        '0': '0',
        '1': '1',
      },
      margin: {
        'auto': 'auto',
        '0': '0px',
        '1': '0.25rem',    // 4px
        '2': '0.5rem',     // 8px
        '3': '0.75rem',    // 12px
        '4': '1rem',       // 16px
        '5': '1.25rem',    // 20px
        '6': '1.5rem',     // 24px
        '8': '2rem',       // 32px
        '10': '2.5rem',    // 40px
        '12': '3rem',      // 48px
        '16': '4rem',      // 64px
        '20': '5rem',      // 80px
        '24': '6rem',      // 96px
        '32': '8rem',      // 128px
        '40': '10rem',     // 160px
        '48': '12rem',     // 192px
        '56': '14rem',     // 224px
        '64': '16rem',     // 256px
        'mx': {
          '0': '0px',
          '1': '0.25rem',    // 4px
          '2': '0.5rem',     // 8px
          '3': '0.75rem',    // 12px
          '4': '1rem',       // 16px
          '5': '1.25rem',    // 20px
          '6': '1.5rem',     // 24px
          '8': '2rem',       // 32px
          '10': '2.5rem',    // 40px
          '12': '3rem',      // 48px
          '16': '4rem',      // 64px
          '20': '5rem',      // 80px
          '24': '6rem',      // 96px
          '32': '8rem',      // 128px
          '40': '10rem',     // 160px
          '48': '12rem',     // 192px
          '56': '14rem',     // 224px
          '64': '16rem',     // 256px
        },
        'my': {
          '0': '0px',
          '1': '0.25rem',    // 4px
          '2': '0.5rem',     // 8px
          '3': '0.75rem',    // 12px
          '4': '1rem',       // 16px
          '5': '1.25rem',    // 20px
          '6': '1.5rem',     // 24px
          '8': '2rem',       // 32px
          '10': '2.5rem',    // 40px
          '12': '3rem',      // 48px
          '16': '4rem',      // 64px
          '20': '5rem',      // 80px
          '24': '6rem',      // 96px
          '32': '8rem',      // 128px
          '40': '10rem',     // 160px
          '48': '12rem',     // 192px
          '56': '14rem',     // 224px
          '64': '16rem',     // 256px,
        },
      },
      padding: {
        '0': '0px',
        '1': '0.25rem',    // 4px
        '2': '0.5rem',     // 8px
        '3': '0.75rem',    // 12px
        '4': '1rem',       // 16px
        '5': '1.25rem',    // 20px
        '6': '1.5rem',     // 24px
        '8': '2rem',       // 32px
        '10': '2.5rem',    // 40px
        '12': '3rem',      // 48px
        '16': '4rem',      // 64px
        '20': '5rem',      // 80px
        '24': '6rem',      // 96px
        '32': '8rem',      // 128px
        '40': '10rem',     // 160px
        '48': '12rem',     // 192px
        '56': '14rem',     // 224px
        '64': '16rem',     // 256px
      },
      width: {
        'auto': 'auto',
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        'full': '100%',
        'screen': '100vw',
      },
      height: {
        'auto': 'auto',
        'full': '100%',
        'screen': '100vh',
      },
      zIndex: {
        '0': '0',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',
        'auto': 'auto',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none',
      },
      screens: {
        'xs': '360px',    // Dispositivos extra pequeños (teléfonos pequeños)
        'sm': '640px',    // Dispositivos pequeños (teléfonos en paisaje, 576px y más)
        'md': '768px',    // Dispositivos medianos (tabletas, 768px y más)
        'lg': '1024px',   // Dispositivos grandes (escritorios, 992px y más)
        'xl': '1280px',   // Dispositivos extra grandes (escritorios grandes, 1200px y más)
        '2xl': '1536px',  // Dispositivos extra extra grandes (escritorios más grandes, 1400px y más)
        '3xl': '1920px',  // TVs y monitores muy grandes
        '4xl': '2560px',  // Monitores ultra anchos
        '5xl': '3200px',  // Monitores ultra grandes
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem', // 2px
        'normal': '0.25rem', // 4px
        'md': '0.375rem', // 6px
        'lg': '0.5rem', // 8px
        'xl': '0.75rem', // 12px
        '2xl': '1rem', // 16px
        '3xl': '1.5rem', // 24px
        'full': '9999px',
      },
    },
  },
  plugins: [],
}