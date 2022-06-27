import Head from 'next/head'
import {AppProps} from 'next/app'
import NextNProgress from "nextjs-progressbar"

import {motion, AnimatePresence} from "framer-motion"

import Layout from '../components/layout/Layout'

import '../styles/globals.css'

function MyApp({Component, pageProps, router}: AppProps) {
    return (
        <AnimatePresence>
            <motion.div
                key={router.route}
                initial="pageInitial"
                animate="pageAnimate"
                exit="pageExit"
                variants={{
                    pageInitial: {
                        opacity: 0
                    },
                    pageAnimate: {
                        opacity: 1
                    },
                    pageExit: {
                        filter: 'grayscale(80%)',
                        opacity: 0.8,
                    },
                }}>
                <Head>
                    <meta name="theme-color" content="#FFFFFF"/>
                    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
                </Head>
                <NextNProgress color="#E7E8E6"/>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </motion.div>
        </AnimatePresence>
    )
}

export default MyApp
