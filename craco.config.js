const CracoLessPlugin = require('craco-less')
const path = require('path')

const pathResolve = pathUrl => path.join(__dirname, pathUrl)

module.exports = {
    webpack: {
        alias: {
            '@': pathResolve('src'),
            '@api': pathResolve('src/api'),
            '@assets': pathResolve('src/assets'),
            '@common': pathResolve('src/common'),
            '@components': pathResolve('src/components'),
            '@hooks': pathResolve('src/hooks'),
            '@pages': pathResolve('src/pages'),
            '@store': pathResolve('src/store'),
            '@utils': pathResolve('src/utils')
        },
        configure: (webpackConfig, {
            env, paths
        }) => {
            console.log(paths, env);
            paths.appBuild = 'dist'
            webpackConfig.output = {
                ...webpackConfig.output,
                // ...{
                //   filename: whenDev(() => 'static/js/bundle.js', 'static/js/[name].js'),
                //   chunkFilename: 'static/js/[name].js'
                // },
                path: path.resolve(__dirname, 'dist'), // 修改输出文件目录
                publicPath: process.env.NODE_ENV === 'development' ? '/' : '/react/'
            }
            return webpackConfig
        }
    },
    babel: {
        plugins: [
            ['import', { libraryName: 'antd', style: true }],
            ["@babel/plugin-proposal-decorators", { legacy: true }]
        ]
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                // 此处根据 less-loader 版本的不同会有不同的配置，详见 less-loader 官方文档
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { 'primary-color': '#1890ff' },
                        javascriptEnabled: true,
                        //配置全局less 变量，不需要在使用的地方导入了
                        // globalVars: {
                        //     hack: `true; @import '~@/assets/style/variable.less';`
                        // }
                    }
                },
            }
        }
    ]
}