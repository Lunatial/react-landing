import Head from 'next/head'
import {AppProps} from 'next/app'
import {useRouter} from "next/router"
import NextNProgress from "nextjs-progressbar"
import {IntlProvider} from "react-intl"

import {ToastContainer} from 'react-toastify'
import {motion, AnimatePresence} from "framer-motion"
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from "react-dnd-html5-backend"

import en from "../lang/en.json"
import hu from "../lang/hu.json"

import Layout from '../components/layout/Layout'
import {ModalProvider} from '../contexts/ModalProvider'
import {ThemeProvider} from '../contexts/ThemeProvider'

import 'react-toastify/dist/ReactToastify.css'

import '../styles/globals.css'

const messages = {
    hu,
    en,
}

function MyApp({Component, pageProps, router}: AppProps) {
    const {locale} = useRouter()

    return (
        // @ts-ignore
        <IntlProvider locale={locale} messages={messages[locale]}>
            <ThemeProvider>
                <DndProvider backend={HTML5Backend}>
                    <AnimatePresence>
                        <motion.div
                            key={router.route}
                            initial="pageInitial"
                            animate="pageAnimate"
                            exit="pageExit"
                            variants={{
                                pageInitial: {
                                    opacity: 0,
                                },
                                pageAnimate: {
                                    opacity: 1
                                },
                                pageExit: {
                                    filter: 'hue-rotate(90deg)',
                                    opacity: 0.8,
                                },
                            }}>
                            <Head>
                                <meta name="author" content="SkyLine-Computer Kft.<Mirkó Feleky - mirko.feleky@skyl.hu>"/>
                                <meta name="theme-color" content="#1F1D26"/>
                                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
                            </Head>
                            <NextNProgress color="#42E3BA" options={{showSpinner: false}}/>
                            <Layout>
                                <ModalProvider>
                                    <Component {...pageProps} />
                                </ModalProvider>
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
            </ThemeProvider>
        </IntlProvider>
    )
}

export default MyApp
