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
        <>
            <NextSeo
                title="connect"
                description={`connect desc`}
            />
            <section className="container mx-auto bg-themeable-dark h-full text-themeable-lightGray">
                <h1 className="text-6xl font-bold my-10 text-center">
                    KAPCSOLAT
                </h1>
                <p className="text-lg text-center my-5">
                    <span className="font-medium">Telefon: </span>
                    +36 90 666 999
                </p>
                <Map mapContainerStyle={mapContainerStyle}/>
            </section>
        </>
    )
}

export default ConnectPage
