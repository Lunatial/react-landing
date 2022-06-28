import Link from "next/link"

const DnDNavigation = () => {
    return (
        <ul className="flex flex-row gap-2 p-2">
            <li className="text-lg text-black font-medium hover:text-indigo-600 transition-all">
                <Link href="/">
                    <a>Kezdőlap</a>
                </Link>
            </li>
            <li className="text-lg text-black font-medium hover:text-indigo-600 transition-all">
                <Link href="/chess">
                    Sakk
                </Link>
            </li>
            <li className="text-lg text-black font-medium hover:text-indigo-600 transition-all">
                <Link href="/dnd">
                    <a>DnD zsebek</a>
                </Link>
            </li>
        </ul>
    )
}

export default DnDNavigation
