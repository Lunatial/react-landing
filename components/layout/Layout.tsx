import {ReactNode} from 'react'

import Navigation from "./Navigation"
import Footer from "./Footer"

type LayoutProps = {
    children: ReactNode
}

export default function Layout({children}: LayoutProps) {
    return (
        <div className="box-border flex flex-col h-screen font-Montserrat">
            <header className="fixed top-0 z-10 w-full">
                <nav>
                    <Navigation/>
                </nav>
            </header>
            <main className="flex flex-grow flex-col">
                {children}
            </main>
            <Footer/>
        </div>
    )
}
