/**
 * @file lavas config
 * @author Tricker(tricker.pan@gmail.com)
 */

'use strict';

const path = require('path');
const BUILD_PATH = path.resolve(__dirname, 'dist');
const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    build: {
        ssr: false,
        path: BUILD_PATH,
        publicPath: '/',
        ssrCopy: isDev ? [] : [
            {
                src: 'server.prod.js'
            },
            {
                src: 'package.json'
            }
        ],
        /**
         * alias for webpack
         *
         * @type {Object.<string, Object>}
         */
        alias: {
            server: {
                'iscroll/build/iscroll-lite$': path.join(__dirname, 'core/iscroll-ssr.js')
            }
        },
        extend: function(config, context) {
            if (context.type === 'base') {
                config.module.rules[1].exclude =
                    /node_modules(?![\\/]_vue-awesome@\d+\.\d+\.\d+@vue-awesome[\\/])/;
                config.module.rules.push({
                    resource: path.join(__dirname, 'core/app.js'), // 应用loader的文件
                    loader: 'svg-loader',
                    enforce: 'pre'
                });
                config.resolveLoader = {
                    alias: {
                        'svg-loader': path.join(__dirname, 'build/svg-loader')
                    }
                };
            }
        },
        /**
         * node externals
         *
         * @type {Array.<string|RegExp>}
         */
        nodeExternalsWhitelist: [
            /iscroll/
        ]
    },
    icon: {
        prefix: 'svg-',
        svgDir: path.join(__dirname, 'assets/svg'),
        icons: [
            'home',
            'map-marker',
            'tree',
            'globe',
            'user'
        ]
    },
    router: {
        mode: 'history',
        base: '/',
        pageTransition: {
            type: 'slide',
            transitionClass: 'slide'
        }
    },
    serviceWorker: {
        swSrc: path.join(__dirname, 'core/service-worker.js'),
        swDest: path.join(BUILD_PATH, 'service-worker.js'),
        // swPath: '/custom_path/', // specify custom serveice worker file's path, default is publicPath
        globDirectory: BUILD_PATH,
        globPatterns: [
            '**/*.{html,js,css,eot,svg,ttf,woff}'
        ],
        globIgnores: [
            'sw-register.js',
            '**/*.map'
        ],
        appshellUrl: '/appshell',
        dontCacheBustUrlsMatching: /\.\w{8}\./
    }
};
