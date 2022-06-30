import {createContext, ReactNode, useContext, useState} from "react"
import AppModal from "../components/AppModal"

type ModalProviderProps = {
    children: ReactNode
    // ModalContent: ReactNode
    // modalTitle: string
}

type ModalContext = {
    isOpen: boolean
    openModal: () => void
    closeModal: () => void
}

const ModalContext = createContext({} as ModalContext)

export function useModal() {
    return useContext(ModalContext)
}

export function ModalProvider({
                                  children,
                                  // ModalContent,
                                  // modalTitle
}: ModalProviderProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    return (
        <ModalContext.Provider
            value={{
                isOpen,
                openModal,
                closeModal,
            }}
        >
            {children}
            <AppModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                // ModalContent={ModalContent}
                // modalTitle={modalTitle}
            />
        </ModalContext.Provider>
    )
}
