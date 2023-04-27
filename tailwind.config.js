const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme': '#068A43'
      },
      backgroundImage: {
        'model_blobT': "url('/public/Images/blob.svg')",//./src/Components/WebsiteBuilder/assests/blob.svg
        'model_blobB': "url('/public/Images/blobB.svg')",
        'model_blobImageB': "url('/public/Images/ImageBlobB.svg')",
        'model_blobImageT': "url('/public/Images/ImageBlobT.svg')",
        'model_ImageBlobFull': "url('/public/Images/ImageBlobFull.svg')"
      }
    }, 
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      ...defaultTheme.screens,
    }
  
  
  },
  plugins: [],
}