import {useEffect,} from "react"
import Link from "next/link"
import {motion, useAnimation,} from "framer-motion"
import {FormattedMessage} from "react-intl"

type SmallMenuOverlayProps = {
    onOpenMenu: () => void
    routes: {
        path: string,
        displayName: string
    }[]
}

const SmallMenuOverlay = ({onOpenMenu, routes}: SmallMenuOverlayProps) => {
    const bars = useAnimation()
    const menuItems = useAnimation()

    useEffect(() => {
        bars
            .start((i) => ({
                width: ['0%', '100%'],
                transition: {
                    delay: (i - 1) * 0.1,
                    duration: 0.4,
                },
            }))
            .then(() => {
                menuItems
                    .start((i) => {
                        return {
                            width: ['0%', '100%'],
                            opacity: ['0%', '100%'],
                            transition: {
                                delay: (i - 1) * 0.1,
                                duration: 0.75,
                            },
                        }
                    })
            })
    }, [bars, menuItems])

    return (
        <motion.ul
            className="absolute top-0 left-0 right-0 bottom-0 w-screen h-screen z-50 bg-transparent text-white"
            key="mobileMenu"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            layout
        >
            <motion.li className="bg-black" style={{height: '20vh'}} custom={1} animate={bars} layout/>
            <motion.li className="bg-black" style={{height: '20vh'}} custom={2} animate={bars} layout/>
            <motion.li className="bg-black" style={{height: '20vh'}} custom={3} animate={bars} layout/>
            <motion.li className="bg-black" style={{height: '20vh'}} custom={4} animate={bars} layout/>
            <motion.li className="bg-black" style={{height: '20vh'}} custom={5} animate={bars} layout/>
            {
                <div className="absolute top-0 left-0 z-60 h-full w-full flex flex-col p-8">
                    <motion.div
                        className="cursor-pointer flex flex-col items-end justify-center mb-2 opacity-0 hover:animate-pulse transition-all text-medium"
                        onClick={onOpenMenu}
                        custom={1}
                        animate={menuItems}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none"
                             viewBox="0 0 24 24"
                             stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                        <FormattedMessage id="general.close"/>
                    </motion.div>
                    <motion.hr className="bg-white h-1 rounded opacity-0" custom={2}
                               animate={menuItems}/>
                    <motion.ul
                        className="flex flex-col gap-14 uppercase h-full items-center justify-center">
                        {
                            routes.map((route, index) => {
                                return <motion.li
                                    key={route.path}
                                    className="opacity-0 text-4xl hover:animate-pulse font-bold transition-all"
                                    custom={index + 3}
                                    animate={menuItems}>
                                    <Link href={route.path}>
                                        <a>
                                            {route.displayName}
                                        </a>
                                    </Link>
                                </motion.li>
                            })
                        }
                    </motion.ul>
                </div>
            }
        </motion.ul>
    )
}

export {SmallMenuOverlay}
