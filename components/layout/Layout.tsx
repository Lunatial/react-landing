import {ReactNode} from 'react'

import Navigation from "./Navigation"
import Footer from "./Footer"

type LayoutProps = {
    children: ReactNode
}

export default function Layout({children}: LayoutProps) {
    return (
        <div className="box-border flex flex-col h-screen font-Montserrat bg-themeable-dark">
            <header className="fixed top-0 z-10 w-full drop-shadow-lg">
                <nav>
                    <Navigation/>
                </nav>
            </header>
            <main className="flex flex-grow flex-col mt-10 lg:mt-0">
                {children}
            </main>
            <Footer/>
        </div>
    )
}
