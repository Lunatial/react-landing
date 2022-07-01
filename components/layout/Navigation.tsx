import AppLink from "../AppLink"

export const routes = [
    {
        "path": "/",
        "displayName": "Kezdőlap"
    },
    {
        "path": "/industrial-solution",
        "displayName": "Ipari megoldások"
    },
    {
        "path": "/image-compare",
        "displayName": "Kép összehasonlítás"
    },
    {
        "path": "/chess",
        "displayName": "Sakk"
    },
    {
        "path": "/connect",
        "displayName": "Kapcsolat"
    },
]

const Navigation = () => {
    return (
        <ul className="flex flex-row gap-4 p-2 uppercase">
            {
                routes.map(route => {
                    return <li key={route.path}>
                        <AppLink path={route.path} displayName={route.displayName}/>
                    </li>
                })
            }
        </ul>
    )
}

export default Navigation
