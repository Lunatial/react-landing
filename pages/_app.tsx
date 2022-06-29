import Head from 'next/head'
import {AppProps} from 'next/app'
import NextNProgress from "nextjs-progressbar"

import {ToastContainer} from 'react-toastify'
import {motion, AnimatePresence} from "framer-motion"
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from "react-dnd-html5-backend"

import Layout from '../components/layout/Layout'

import 'react-toastify/dist/ReactToastify.css'

import '../styles/globals.css'

function MyApp({Component, pageProps, router}: AppProps) {
    return (
        <DndProvider backend={HTML5Backend}>
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
                    <NextNProgress color="rgb(59, 130, 246)"/>
                    <Layout>
                        <Component {...pageProps} />
                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover/>
                    </Layout>
                </motion.div>
            </AnimatePresence>
        </DndProvider>
    )
}

export default MyApp
