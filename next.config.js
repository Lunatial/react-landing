const withOptimizedImages = require('next-optimized-images')
const withPlugins = require('next-compose-plugins')
const withPWA = require("next-pwa")

const withTM = require('next-transpile-modules')(['react-dnd'])

const isProd = process.env.NODE_ENV === "production"

module.exports = withPlugins([
        [withOptimizedImages, {}],
        withPWA,
        withTM,
    ],
    {
        reactStrictMode: true,
        pwa: {
            // "disable": true,
            "disable": !isProd,
            "dest": "public",
            // runtimeCaching,
            // register: true,
            // scope: '/app',
            // sw: 'service-worker.js',
        },
        images: {
            disableStaticImages: true
        },
    })
