const path = require('path');
module.exports = {
    purge: {
		enabled: true,
		content: [path.resolve(process.cwd(), `src/**/*.{js,jsx,ts,tsx}`)]
	},
	darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          electric: "#db00ff",
          ribbon: "#0047ff",
        },
      },
    },
    plugins: [],
  };