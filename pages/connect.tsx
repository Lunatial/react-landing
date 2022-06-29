import {useMemo} from "react"
import dynamic from 'next/dynamic'

import NextSeo from "../components/NextSeo"

const mapContainerStyle = {height: 500, width: "100%"}

const ConnectPage = () => {
    const Map = useMemo(() => dynamic(
        () => import('../components/Map'), // replace '@components/map' with your component's location
        {
            loading: () => <p style={mapContainerStyle}>A térkép töltődik</p>,
            ssr: false // This line is important. It's what prevents server-side render
        }
    ), [/* list variables which should trigger a re-render here */])

    return (
        <div className="container mx-auto">
            <NextSeo
                title="Lenoa"
                description={`Lenoa`}
            />
            <h1 className="text-5xl text-center font-medium my-10 font-VinSansPro">KAPCSOLAT</h1>
            <hr className="border-solid border-2 rounded w-1/4 border-black mx-auto my-5"/>
            <p className="text-lg text-center my-5">
                <span className="font-medium">Telefon: </span>
                +36 90 666 999
            </p>
            <Map mapContainerStyle={mapContainerStyle}/>
            <hr className="border-solid border-2 rounded w-1/4 border-black mx-auto my-10"/>
        </div>
    )
}

export default ConnectPage
