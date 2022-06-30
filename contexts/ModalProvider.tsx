import {createContext, ReactNode, useContext, useState, ReactElement} from "react"
import AppModal from "../components/AppModal"

type ModalProviderProps = {
    children: ReactNode
}

type ModalContext = {
    isOpen: boolean
    openModal: (arg0: {
        ContentComponent: ReactElement<any, any>
        modalTitle: string
    }) => void
    closeModal: () => void
}

const ModalContext = createContext({} as ModalContext)

export function useModal() {
    return useContext(ModalContext)
}

export type ModalProps = {
    ContentComponent: ReactElement<any, any>
    modalTitle: string
}

export function ModalProvider({children}: ModalProviderProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [modalProps, setModalProps] = useState<ModalProps | null>(null)

    const openModal = (modalProps: ModalProps) => {
        setIsOpen(true)
        setModalProps(modalProps)
    }
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
            {isOpen && modalProps && (
                <AppModal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    ModalContent={modalProps.ContentComponent}
                    modalTitle={modalProps.modalTitle}
                />
            )}
        </ModalContext.Provider>
    )
}
