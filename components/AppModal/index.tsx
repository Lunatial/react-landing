import {FC, ReactNode} from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Props {
    isOpen: boolean
    setIsOpen: (state: boolean) => void
    // ModalContent: ReactNode
    // modalTitle: string
}

const backdropVariant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            delayChildren: 0.2,
        },
    },
};

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
};

const AppModal: FC<Props> = ({
                                 isOpen,
                                 setIsOpen,
                                 // ModalContent,
                                 // modalTitle
}) => {

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="modal-backdrop"
                    variants={backdropVariant}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <motion.div className="modal-container" variants={modalVariant}>
                        <h1>Modal Title ide</h1>
                        {/*<ModalContent />*/}
                        content..
                        <motion.div
                            whileHover={{ rotate: 45 }}
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
    );
};

export default AppModal;
