/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        dailydealcarsheme: {
        
          primary: "#6150FC",
                  
          secondary: "#6150FC",
                  
          accent: "#3A4256",
          
          "neutral": "#3D4451",
          
          "base-100": "#FFFFFF",
                   
          "info": "#3ABFF8",
                   
          "success": "#36D399",
                   
          "warning": "#FBBD23",
                   
          "error": "#F87272",
        },
       },
     ],
   },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
