import {useEffect, useState} from "react"
import {motion, useAnimation} from "framer-motion"

type SmallMenuOverlayProps = {
    onOpenMenu: () => void
}

const SmallMenuOverlay = ({onOpenMenu}: SmallMenuOverlayProps) => {
    const [menuContentCanAppear, setMenuContentCanAppear] = useState(false)
    const bars = useAnimation()

    useEffect(() => {
        bars
            .start((i) => ({
                width: ['0%', '100%'],
                transition: {
                    delay: i * 0.15,
                    duration: 1,
                },
            }))
            .then(() => setMenuContentCanAppear(true))
    }, [bars,])
    console.log(menuContentCanAppear)
    return (
        <ul className="absolute top-0 left-0 right-0 bottom-0 w-screen h-screen z-50 bg-transparent">
            <motion.li className="bg-black" style={{height: '20vh'}} custom={1} animate={bars}/>
            <motion.li className="bg-black" style={{height: '20vh'}} custom={2} animate={bars}/>
            <motion.li className="bg-black" style={{height: '20vh'}} custom={3} animate={bars}/>
            <motion.li className="bg-black" style={{height: '20vh'}} custom={4} animate={bars}/>
            <motion.li className="bg-black" style={{height: '20vh'}} custom={5} animate={bars}/>
            <div className="absolute top-0 left-0 z-60 w-full flex flex-col ">
                <motion.p className="cursor-pointer text-white justify-end" onClick={onOpenMenu} >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                    close
                </motion.p>
            </div>
        </ul>
    )
}

export {SmallMenuOverlay}
