import Link from "next/link"

// import {routes} from "./Navigation"
// // @ts-ignore
// import logo from '../../public/images/logo.png?webp'
// // @ts-ignore
// import fbIcon from '../../public/images/facebook_icon.png?webp'
// // @ts-ignore
// import instaIcon from '../../public/images/instagram_icon.png?webp'

const Footer = () => {
    return (
        <footer className='mx-auto w-full bg-gray-50 p-14'>
            <div className="block sm:flex flex-row flex-wrap">
                <div className="basis-1/2 lg:basis-2/5">
                    <Link href="/" passHref>
                        <div className="mx-auto m-4 cursor-pointer text-center">
                            logo
                        </div>
                    </Link>
                    <hr className="border-solid border-2 rounded w-1/2 border-black mx-auto my-4"/>
                    <p className="mx-auto w-full md:w-5/12 leading-loose text-3xl text-center font-Playfair">
                        Jajj, de jelige
                    </p>
                </div>
                <div className="basis-1/2 lg:basis-1/5 text-center lg:text-left">
                    <p className="text-4xl font-medium my-4 font-VinSansPro">
                        KAPCSOLAT
                    </p>
                    <p className="text-lg my-2">
                        Skyline-Computer kft.
                    </p>
                    <p className="text-lg my-2">
                        Kecskemét 6000
                    </p>
                    <p className="text-lg my-2">
                        Trombita utca 2.
                    </p>
                    <p className="text-lg my-2">
                        TELEFONSZÁM: +36 90 666 999
                    </p>
                </div>
                <div className="basis-1/2 lg:basis-1/5 text-center lg:text-left">
                    <p className="text-4xl font-medium my-4 font-VinSansPro">
                        SOCIAL
                    </p>
                    <p className="text-lg my-2 flex lg:block justify-center">
                        {/*<img src={fbIcon} alt="Facebook icon" width={40} height={40}/>*/}
                        img
                    </p>
                    <p className="text-lg my-2">
                        FACEBOOK
                    </p>
                    <p className="text-lg my-2 flex lg:block justify-center">
                        {/*<img src={instaIcon} alt="Instagram icon" width={40} height={40}/>*/}
                        img
                    </p>
                    <p className="text-lg my-2">
                        LINKEDIN
                    </p>
                </div>
                <div className="basis-1/2 lg:basis-1/5 flex flex-col text-center lg:text-left">
                    <p className="text-4xl font-medium my-4 font-VinSansPro">
                        Footer column
                    </p>
                    {/*{*/}
                    {/*    routes.map(route => {*/}
                    {/*        return <Link key={route.path} href={route.path} passHref>*/}
                    {/*            <a className="text-lg my-2 text-black hover:text-gray-400">{route.displayName}</a>*/}
                    {/*        </Link>*/}
                    {/*    })*/}
                    {/*}*/}
                </div>
            </div>
            <p className="text-center mt-12 uppercase">COPYRIGHT © | Skyline-Computer kft. MINDEN JOG FENNTARTVA. | JOGI
                NYILATKOZAT |
                IMPRESSZUM</p>
        </footer>
    )
}

export default Footer
