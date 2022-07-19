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
        i18n: {
            // The locales you want to support in your app
            locales: ["hu", "en",],
            // The default locale you want to be used when visiting a non-locale prefixed path e.g. `/hello`
            defaultLocale: "hu",
        },
    })
