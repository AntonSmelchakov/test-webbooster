export default {
    plugins: {
        '@csstools/postcss-global-data': { files: ['./css/custom-media.css'] },
        'postcss-custom-media': {},
        'postcss-hexrgba': {},
        'postcss-utopia': {
            minWidth: 380,
            maxWidth: 1920,
        }
    }
}