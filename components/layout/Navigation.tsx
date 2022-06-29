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
        "path": "/chess",
        "displayName": "Sakk"
    },
]

const Navigation = () => {
    return (
        <ul className="flex flex-row gap-4 p-2">
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
