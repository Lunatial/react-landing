import {ReactNode} from 'react'

// import Footer from "./Footer"
import DnDNavigation from "../DnDNavigation"

type LayoutProps = {
    children: ReactNode
}

export default function Layout({children}: LayoutProps) {
    return (
        <div className="flex flex-col h-screen font-Montserrat">
            <DnDNavigation/>
            <main className="flex flex-grow flex-col">
                {children}
            </main>
            {/*<Footer/>*/}
            <div>footer</div>
        </div>
    )
}
