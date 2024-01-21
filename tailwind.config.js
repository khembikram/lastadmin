
module.exports = {
    content: [
        ".{html,js}",
        'node_modules/preline/dist/*.js',
    ],
    darkMode: ['class', '[data-mode="dark"]'],
    theme: {

        container: {
            center: true,
        },

        fontFamily: {
            'base': ['Noto Sans', 'sans-serif'],
        },

        extend: {
            colors: {
                'primary': '#458bc4',

                'secondary': '#6c757d',

                'success': '#4fc55b',

                'warning': '#e2ab3b',

                'info': '#3db9dc',

                'danger': '#d57171',

                'purple': '#aa81f3',

                'pink': '#ff8acc',

                'teal': '#23b195',

                'light': '#f5f5f5',

                'dark': '#626773',
            },
        },
    },

    plugins: [
        require('preline/plugin'),
        require('@tailwindcss/forms'),
        // require('@tailwindcss/aspect-ratio'),
        // require('@tailwindcss/typography'),
    ],
}