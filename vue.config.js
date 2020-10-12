module.exports = {
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    modifyVars: {
                        'primary-color': '#50b3c0',
                        'link-color': '#50b3c0',
                    },
                    javascriptEnabled: true,
                },
            },
            sass: {
                prependData: `@import './src/assets/styles/index.scss';`,
            },
        },
    },
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true,
            preload: 'src/preload.js',
            externals: ['arithmetic-expression-generator'],
            nodeModulesPath: ['./addons', './node_modules'],
            chainWebpackMainProcess: config => {
                config.module
                    .rule('node')
                    .test(/\.node$/)
                    .use('node-loader')
                    .loader('node-loader')
                    .end();
            },
            chainWebpackRendererProcess: config => {
                config.module
                    .rule('node')
                    .test(/\.node$/)
                    .use('node-loader')
                    .loader('node-loader')
                    .end();
            },
            builderOptions: {
                appId:
                    'indi.WoodenKevin_sidney-zb.ArithmeticExpressionGenerator.ElectronApp',
                productName: 'ArithmeticExpressionGenerator',
                copyright: 'Copyright © 2020 by WoodenKevin & sidney-zb',
                directories: {
                    output: './dist',
                },
                win: {
                    icon: './icon.ico',
                    target: [
                        {
                            target: 'nsis',
                            arch: ['x64', 'ia32'],
                        },
                    ],
                },
                nsis: {
                    oneClick: false,
                    allowElevation: true,
                    allowToChangeInstallationDirectory: true,
                    installerIcon: './icon.ico',
                    uninstallerIcon: './icon.ico',
                    installerHeaderIcon: './icon.ico',
                    createDesktopShortcut: true,
                    createStartMenuShortcut: true,
                    shortcutName: 'demo',
                },
            },
        },
    },
};
