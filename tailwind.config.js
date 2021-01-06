// tailwind.config.js
const colors = require('tailwindcss/colors')
module.exports = {
    purge: [
      './public/**/*.html',
      './public/**/*.js',
    ],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {
         borderWidth:{
           6: '6px'
         },
         colors:{
           'cyan':colors.cyan,
           'emerald': colors.emerald
         }
       },
     },
     variants: {},
     plugins: [],
}