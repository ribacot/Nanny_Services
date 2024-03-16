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
    // extend: {
    //   backgroundImage: {
    //     "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
    //     "gradient-conic":
    //       "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    //   },
    // },
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
