import Image from "next/image"
import {FormattedMessage} from "react-intl"

import TryMe from "./TryMe"
import ContactUs from "./ContactUs"
import ColoredText from "../ColoredTexts"

// @ts-ignore
import heroImg from '../../public/images/Frontendnyito.png?webp'
import AppLoaderComp from "../AppLoader";

const HeroSection = () => {
    return (
        <section
            className="bg-themeable-dark"
            style={{minHeight: 'calc(100vh - 44px)'}}>
            <div className="flex flex-col lg:flex-row gap-50 container mx-auto h-full items-center">
                <div className="basis-1/2 w-full">
                    <div className="max-w-xl">
                        <Image
                            layout='responsive'
                            height={600}
                            width={600}
                            priority
                            src={heroImg}
                            alt="Hero img"/>
                    </div>
                </div>
                <div className="basis-1/2">
                    <h1 className="text-6xl font-bold my-10 text-themeable-lightGray">
                        <FormattedMessage id="page.home.title"/>
                    </h1>
                    <h2 className="text-6xl font-bold my-10 text-themeable-lightGray">
                        <FormattedMessage id="page.home.subTitle"/>
                    </h2>
                    <p className="text-left text-themeable-lightGray">
                        <ColoredText color="text-themeable-blue">„Lesznek még ennél többen is?”</ColoredText>
                        – kérdezte a tusványosszűz fotós kollégánk a bálványosi szabadegyetem nulladik napján
                        a <ColoredText color="text-themeable-yellow">Tankcsapda-koncert</ColoredText> alatt, amire
                        szinte egyszerre
                        válaszoltuk, hogy igen, <ColoredText color="text-themeable-orange">Orbán Viktoron</ColoredText>.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-around mt-12">
                        <TryMe/>
                        <ContactUs/>
                        <AppLoaderComp/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
