/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bgimg': "url('./assets/images/bg3.jpg')",
        'logo' : "url('./assets/images/logo.svg')",
        'bgimg2': "url('./assets/images/bgimg2.png')",
       'form_img':"url(./assets/images/form_photo.jpg)"
      },
      colors:{
        darker:"#164863",
        primary: '#427D9D',
        lighter:"#9BBEC8",
        grayish:"#cbd5e1",
        morelighter:"#DDF2FD",
    
       
      }
   
    },
    fontFamily: {
      'sans': ['"Open Sans"', 'sans-serif'],
      'serif': ['"Poppins", serif'],
      'sans1':["Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      
    },
    animation: {
      scroll: 'scroll 40s linear infinite',
    },
    keyframes: {
      scroll: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-50%)' },
      },
    },
   
  
  },
  plugins: [],
}