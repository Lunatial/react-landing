import {useRouter} from 'next/router'
import Link from 'next/link'

// @ts-ignore
import logo from '../../public/images/logo.png?webp'

const getNavClasses = (active: boolean): string => {
    const basicClasses = "bg-transparent px-2 py-4 uppercase border-transparent focus:border-transparent focus:ring-0 border-none outline-none w-full"
    const activeClasses = "text-gray-500"
    const inActiveClasses = "text-black hover:text-gray-600"

    return `${basicClasses} ${active ? activeClasses : inActiveClasses}`
}

const Navigation = () => {
    const router = useRouter()

    const handleClick = (href: string) => {
        router.push(href)
    }

    return (
        <div className="flex flex-col mb-2">
            <div className="flex justify-end text-sm m-5">
                <p>BUDAPEST, ALKOTÁS U. 53, 1123</p>
                <p className="mx-2">/</p>
                <p>+36 70 333 3010</p>
                <p className="mx-2">/</p>
                <p>INFO@LENOA.HU</p>
            </div>
            <Link href="/" passHref>
                <img
                    src={logo}
                    className="mx-auto m-4 cursor-pointer"
                    alt="Lenoa-logo"
                    width={168}
                    height={58}/>
            </Link>
            <hr className="border-solid border-2 rounded w-1/2 border-black mx-auto"/>
            <nav className="container mx-auto mt-0 max-w-3xl font-VinSansPro">
                <ul className="list-reset block md:flex justify-center justify-around text-3xl font-medium">
                    <li>
                        <button
                            onClick={() => handleClick('/')}
                            className={getNavClasses(router.pathname === '/')}>
                            RÓLUNK
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleClick('/coffees')}
                            className={getNavClasses(router.pathname.startsWith("/coffees"))}>
                            KÁVÉINK
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleClick('/webshop')}
                            className={getNavClasses(router.pathname.startsWith("/webshop"))}>
                            WEBSHOP
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleClick('/menu')}
                            className={getNavClasses(router.pathname.startsWith("/menu"))}>
                            MENÜ
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleClick('/galery')}
                            className={getNavClasses(router.pathname.startsWith("/galery"))}>
                            GALÉRIA
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleClick('/franchise')}
                            className={getNavClasses(router.pathname.startsWith("/franchise"))}>
                            FRANCHISE
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleClick('/connect')}
                            className={getNavClasses(router.pathname.startsWith("/connect"))}>
                            KAPCSOLAT
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation
