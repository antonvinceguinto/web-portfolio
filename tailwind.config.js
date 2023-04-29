module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
        inconsolata: ['Inconsolata', 'monospace'],
      },
	  colors: {
		'anton-black': '#121212',
	  },
    },
  },
  plugins: [],
};
