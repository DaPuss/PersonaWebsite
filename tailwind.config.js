module.exports = {
    content: [
        './node_modules/flowbite/**/*.js',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primaryBackground: '#222831',
                primaryText: '#EEEEEE',
                primaryHeading: '#e0d5b7',
                primaryHighlight: '#FFD369',
                primaryGreen1: '#8ee4af',
                primaryGreen2: '#5cdb95',
                primaryGreen3: '#EEEEEE',
                primaryCream: '#e0d5b7',
                primaryBlue: '#05386b',
            },
            spacing: {
                28: '7rem',
            },
            letterSpacing: {
                tighter: '-.04em',
            },
            lineHeight: {
                tight: 1.2,
            },
            fontSize: {
                '5xl': '2.5rem',
                '6xl': '2.75rem',
                '7xl': '4.5rem',
                '8xl': '6.25rem',
            },
            boxShadow: {
                small: '0 5px 10px rgba(0, 0, 0, 0.12)',
                medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
            },
            fontFamily: {
                'share-tech': ['Share Tech', 'sans-serif'],
            },
        },
    },
    plugins: [require('flowbite/plugin')],
}
