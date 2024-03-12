/** @type {import('tailwindcss').Config} */
export default {
  purge: {
    options: {
      safelist: ['active'],
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'xs': '8px',
        's': '16px',
        'm': '24px',
        'l': '32px',
        'xl': '40px',
      },
      colors: {
        'gray-secondary': '#F1F3F5',
        'gray-primary' : "#868E96",
        'gray-darker': '#343A40',
        'red-secondary': '#FFE3E3',
        'red-primary': '#FA5252',
        'pink-secondary': '#FFDEEB',
        'pink-primary': '#E64980',
        'grape-secondary': '#F3D9FA',
        'grape-primary': '#BE4BDB',
        'violet-secondary': '#E5DBFF',
        'violet-primary' : '#E5DBFF',
        'indigo-secondary' : '#DBE4FF',
        'indigo-primary' : '#4C6EF5',
        'blue-secondary' : '#D0EBFF',
        'blue-primary' : '#228BE6',
        'cyan-secondary' : '#C5F6FA',
        'cyan-primary': '#15AABF',
        'teal-secondary' : '#C3FAE8',
        'teal-primary' : '#12B886',
        'brand-secondary' : '#C2F7FA',
        'brand-primary' : '#208D8E',
        'green-secondary' : '#D3F9D8',
        'green-primary' : '#40C057',
        'lime-secondary' : '#E9FAC8',
        'lime-primary' : '#82C91E',
        'yellow-secondary': '#FFF3BF',
        'yellow-primary' : '#FAB005',
        'orange-secondary' : '#FFE8CC',
        'orange-primary' : '#FD7E14'
      },
      fontFamily:{
        "body": "Iran Yekan Body",
        "heading" : "Iran Yekan Heading",
        'bold' : "Iran Yekan Bold",
      },
      fontSize:{
        'heading-l' : '32px',
        'heading-m' : '28px',
        'heading-s' : '24px',
        'heading-xs' : '20px',
        'body-xl' : '24px',
        'body-l' : '20px',
        'body-m' : '16px',
        'body-s' : '14px',
        'body-xs' : '12px',
        'bold-xl' : '24px',
        'bold-l' : '20px',
        'bold-m' : '16px',
        'bold-s' : '14px',
        'bold-xs' : '12px'
      },
    },
  },
  plugins: [],
}

