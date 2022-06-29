import Link from "next/link"

export const routes = [
    {
        "path": "/",
        "displayName": "Kezdőlap"
    },
    {
        "path": "industrial-solution",
        "displayName": "Ipari megoldások"
    },
    {
        "path": "chess",
        "displayName": "Sakk"
    },
]

const DnDNavigation = () => {
    return (
        <ul className="flex flex-row gap-4 p-2">
            {
                routes.map(route => {
                    return  <li key={route.path} className="text-lg text-black font-medium hover:text-indigo-600 transition-all">
                        <Link href={route.path}>
                            <a>{route.displayName}</a>
                        </Link>
                    </li>
                })
            }
        </ul>
    )
}

export default DnDNavigation
