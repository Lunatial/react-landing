import {ReactElement, useEffect} from "react"
import {motion, AnimatePresence} from "framer-motion"

interface Props {
    isOpen: boolean
    setIsOpen: (state: boolean) => void
    ModalContent: ReactElement<any, any>
    modalTitle: string
}

const backdropVariant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            delayChildren: 0.2,
        },
    },
}

const modalVariant = {
    hidden: {
        y: "-100vh",
    },
    visible: {
        y: 0,
        transition: {
            type: "spring",
            stiffness: 70,
        },
    },
}

const AppModal = (props: Props) => {
    const {
        isOpen,
        setIsOpen,
        ModalContent,
        modalTitle
    } = props

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.code === "Escape") {
                setIsOpen(false)
            }
        }
        window.addEventListener('keydown', handleEsc)

        return () => {
            window.removeEventListener('keydown', handleEsc)
        }
    }, [])

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="bg-slate-900/90 w-full h-full grid place-items-center absolute top-0 left-0"
                    variants={backdropVariant}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <motion.div
                        className="w-100 min-w-140 h-140 bg-slate-50 rounded-lg flex flex-col shadow-lg p-12 items-center relative"
                        variants={modalVariant}>
                        <h1>{modalTitle}</h1>
                        {
                            ModalContent
                        }
                        <motion.div
                            whileHover={{rotate: 45}}
                            className="close"
                            onClick={() => setIsOpen(false)}
                        >
                            <div></div>
                            <div></div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default AppModal
