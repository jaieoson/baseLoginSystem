
module.exports = {
  mode: 'jit',
  content: [
    './src/components/**/*.{js, ts, jsx, tsx}',
    './src/pages/**/*.{js, ts, jsx, tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
  
}
