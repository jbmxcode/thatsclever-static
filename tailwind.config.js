module.exports = {
    purge: [
        './src/**/*.html',
        './src/**/*.js',
    ],
    darkMode: false,
    theme: {
        extend: {
            width: {
                wrapperLogo: '477px',
                headerActions: '316px',
            },
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1350px',
                '2xl': '1524px',
            },
            height: {
                header: '100px',
            },
            fontFamily: {
                primary: 'Roboto, sans-serif',
                secondary: 'Comfortaa, cursive',
            },
            flex: {
                2: '2 2 0%',
            },
            opacity: {
                3: '0.03',
            },
            letterSpacing: {
                bigger: '0.6em',
            },
            textColor: (theme) => ({
                ...theme('colors'),
                primary: '#FFEB0D',
                secondary: '#82807F',
                tertiary: '#3A3B3C',
            }),
            backgroundColor: (theme) => ({
                ...theme('colors'),
                primary: '#FFEB0D',
                secondary: '#82807F',
                tertiary: '#3A3B3C',
            }),
        },
    },
    variants: {},
    plugins: [],
};
