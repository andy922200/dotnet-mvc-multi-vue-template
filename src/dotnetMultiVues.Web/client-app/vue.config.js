module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    outputDir: '../wwwroot',
    css: {
        extract: true,
        sourceMap: process.env.NODE_ENV !== 'production'
    },
    filenameHashing: false,
    productionSourceMap: process.env.NODE_ENV !== 'production',
    configureWebpack: config => {
        config.devtool = 'source-map'
        if (process.env.NODE_ENV === 'production') {
            // mutate config for production...
        } else {
            config.devServer = {
                port: 8080,
                proxy: {
                    '/': {
                        target: 'https://localhost:5001'
                    }
                }
            }
        }
    },
    pages: {
        demo: {
            entry: 'src/pages/demo/main.ts',
            template: 'public/index.html',
            filename: 'demo.html',
            title: 'demo Page',
            dom: 'demo',
            chunks: ['chunk-vendors', 'chunk-common', 'demo']
        },
        dashboard: {
            entry: 'src/pages/dashboard/main.ts',
            template: 'public/index.html',
            filename: 'dashboard.html',
            title: 'dashboard Page',
            dom: 'dashboard',
            chunks: ['chunk-vendors', 'chunk-common', 'dashboard']
        }
    }
}
