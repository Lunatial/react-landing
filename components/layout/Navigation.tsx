import {useIntl} from "react-intl"

import AppLink from "../AppLink"
import LanguageSelector from "../LanguageSelector"

const Navigation = () => {
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

    return (
        <div className="flex flex-row justify-between p-2 bg-themeable-dark">
            <ul className="flex flex-col lg:flex-row gap-4 uppercase">
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
    )
}

export default Navigation
