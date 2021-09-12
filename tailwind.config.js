module.exports = {
  // mode: 'jit',
  purge: [
    '*'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        afloatUp: {
          '0%, 100%': { transform: 'translateY(-3%)' },
          '50%': { transform: 'none' }
        },
        afloatDown: {
          '0%, 100%': { transform: 'translateY(3%)' },
          '50%': { transform: 'none' }
        }
      },
      animation: {
        afloatUp: 'afloatUp 5s ease-in-out infinite',
        afloatDown: 'afloatDown 5s ease-in-out infinite',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
