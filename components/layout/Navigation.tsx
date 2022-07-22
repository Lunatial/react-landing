import {useState} from "react"
import {useIntl} from "react-intl"

import AppLink from "../AppLink"
import LanguageSelector from "../LanguageSelector"
import {SmallMenuOverlay} from "../SmallMenuOverlay"

const Navigation = () => {
    const [open, setOpen] = useState(false)
    const intl = useIntl()

    const serviceName = intl.formatMessage({id: "navigation.service"})
    const contactName = intl.formatMessage({id: "navigation.contact"})
    const aboutName = intl.formatMessage({id: "navigation.about"})
    const blogName = intl.formatMessage({id: "navigation.blog"})

    const routes = [
        {
            "path": "/",
            "displayName": serviceName
        },
        {
            "path": "/blog",
            "displayName": blogName
        },
        {
            "path": "/about",
            "displayName": aboutName
        },
        // {
        //     "path": "/single-dnd",
        //     "displayName": "Zsebek"
        // },
        // {
        //     "path": "/industrial-solution",
        //     "displayName": "Ipari megoldások"
        // },
        // {
        //     "path": "/image-compare",
        //     "displayName": "Kép összehasonlítás"
        // },
        // {
        //     "path": "/chess",
        //     "displayName": "Sakk"
        // },
        {
            "path": "/connect",
            "displayName": contactName
        },
    ]

    const handleOpenMenu = () => {
        setOpen(prevState => !prevState)
    }

    return (
        <>
            {
                open
                    ? <SmallMenuOverlay onOpenMenu={handleOpenMenu}/>
                    : <div className="flex flex-row justify-between p-2 drop-shadow-lg bg-themeable-dark">
                        <div className="block md:hidden cursor-pointer" onClick={handleOpenMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="#AC92EB">
                                <path
                                    d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                            </svg>
                        </div>
                        <ul className="flex-row hidden md:flex gap-4 uppercase">
                            {
                                routes.map(route => {
                                    return <li key={route.path}>
                                        <AppLink path={route.path} displayName={route.displayName}/>
                                    </li>
                                })
                            }
                        </ul>
                        <LanguageSelector/>
                    </div>
            }
        </>
    )
}

export default Navigation
