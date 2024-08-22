module.exports = {
  content: [
    './dist/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './*.html',
    './node_modules/flowbite/**/*.js',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
    './node_modules/react-tailwindcss-datetimepicker/dist/index.esm.js'
  ],
  plugins: [require('@tailwindcss/forms'), require('flowbite/plugin')],
  variants: {
    extend: {
      opacity: ['disabled']
    }
  }
}
