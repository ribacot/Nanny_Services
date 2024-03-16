/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		// "./pages/**/*.{js,ts,jsx,tsx,mdx}",
		// "./components/**/*.{js,ts,jsx,tsx,mdx}",
		"src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {},
	},
  theme: {
    extend: {
      colors: {
				blue: "#0957C3",
				// darkBlue: "#0B44CD",
				// input: "#F7F7FB",
        // darck:" #121417"
			},

    },
    screens: {
			sm: '320px',
			md: '768px',
			xl: '1440px',
			smOnly: { max: '767.98px' },
			mdOnly: { min: '768px', max: '1279.98px' },
			notXl: { max: '1439.98px' },
		  },

    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '15px',
        md: '100px',
        xl: '128px',
        '2xl': '6rem',
      },
    },
  },

	plugins: [],
};
