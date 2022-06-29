import {ReactNode} from 'react'

import Navigation from "./Navigation"
import Footer from "./Footer"

type LayoutProps = {
    children: ReactNode
}

export default function Layout({children}: LayoutProps) {
    return (
        <div className="flex flex-col h-screen font-Montserrat">
            <Navigation/>
            <main className="flex flex-grow flex-col">
                {children}
            </main>
            <Footer/>
        </div>
    )
}
