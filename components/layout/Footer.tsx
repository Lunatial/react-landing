import Link from "next/link"
// @ts-ignore
import logo from '../../public/images/logo.png?webp'
// @ts-ignore
import fbIcon from '../../public/images/facebook_icon.png?webp'
// @ts-ignore
import instaIcon from '../../public/images/instagram_icon.png?webp'

const Footer = () => {
    return (
        <footer className='mx-auto w-full bg-gray-50 p-14'>
            <div className="block sm:flex flex-row flex-wrap">
                <div className="basis-1/2 lg:basis-2/5">
                    <Link href="/" passHref>
                        <img
                            src={logo}
                            className="mx-auto m-4 cursor-pointer"
                            alt="Lenoa-logo"
                            width={168}
                            height={58}/>
                    </Link>
                    <hr className="border-solid border-2 rounded w-1/2 border-black mx-auto my-4"/>
                    <p className="mx-auto w-full md:w-5/12 leading-loose text-3xl text-center font-Playfair">
                        Amennyiben kérdésed
                        van, lépj velünk
                        kapcsolatba!
                    </p>
                </div>
                <div className="basis-1/2 lg:basis-1/5 text-center lg:text-left">
                    <p className="text-4xl font-medium my-4 font-VinSansPro">
                        KAPCSOLAT
                    </p>
                    <p className="text-lg my-2">
                        LENOA COFFEE
                    </p>
                    <p className="text-lg my-2">
                        MOM PARK
                    </p>
                    <p className="text-lg my-2">
                        BUDAPEST 1123, ALKOTÁS U. 53
                    </p>
                    <p className="text-lg my-2">
                        NYITVATARTÁS: ...
                    </p>
                    <p className="text-lg my-2">
                        TELEFONSZÁM: +36 70 333 3010
                    </p>
                    <p className="text-lg my-2">
                        E-MAIL: INFO@LENOA.HU
                    </p>
                </div>
                <div className="basis-1/2 lg:basis-1/5 text-center lg:text-left">
                    <p className="text-4xl font-medium my-4 font-VinSansPro">
                        SOCIAL
                    </p>
                    <p className="text-lg my-2 flex lg:block justify-center">
                        <img src={fbIcon} alt="Facebook icon" width={40} height={40}/>
                    </p>
                    <p className="text-lg my-2">
                        FACEBOOK
                    </p>
                    <p className="text-lg my-2 flex lg:block justify-center">
                        <img src={instaIcon} alt="Instagram icon" width={40} height={40}/>
                    </p>
                    <p className="text-lg my-2">
                        INSTAGRAM
                    </p>
                </div>
                <div className="basis-1/2 lg:basis-1/5 flex flex-col text-center lg:text-left">
                    <p className="text-4xl font-medium my-4 font-VinSansPro">
                        SITEMAP
                    </p>
                    <Link href="/" passHref>
                        <a className="text-lg my-2 text-black hover:text-gray-400">RÓLUNK</a>
                    </Link>
                    <Link href="/coffees" passHref>
                        <a className="text-lg my-2 text-black hover:text-gray-400">
                            KÁVÉINK
                        </a>
                    </Link>
                    <Link href="/webshop" passHref>
                        <a className="text-lg my-2 text-black hover:text-gray-400">
                            WEBSHOP
                        </a>
                    </Link>
                    <Link href="/menu" passHref>
                        <a className="text-lg my-2 text-black hover:text-gray-400">
                            MENÜ
                        </a>
                    </Link>
                    <Link href="/galery" passHref>
                        <a className="text-lg my-2 text-black hover:text-gray-400">
                            GALÉRIA
                        </a>
                    </Link>
                    <Link href="/franchise" passHref>
                        <a className="text-lg my-2 text-black hover:text-gray-400">
                            FRANCHISE
                        </a>
                    </Link>
                    <Link href="/connect" passHref>
                        <a className="text-lg my-2 text-black hover:text-gray-400">
                            KAPCSOLAT
                        </a>
                    </Link>
                </div>
            </div>
            <p className="text-center mt-20">COPYRIGHT © | LENOA COFFEE MINDEN JOG FENNTARTVA. | JOGI NYILATKOZAT |
                IMPRESSZUM</p>
        </footer>
    )
}

export default Footer
