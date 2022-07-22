import Image from "next/image"
import {FormattedMessage} from "react-intl"

import TryMe from "./TryMe"
import ContactUs from "./ContactUs"
import ColoredText from "../ColoredTexts"
import AppLoaderComp from "../AppLoader"
import SectionTitle from "../layout/SectionTitle"
import SectionContentText from "../layout/SectionContentText"

// @ts-ignore
import heroImg from '../../public/images/Frontendnyito.png?webp'

const HeroSection = () => {
    return (
        <section
            className="bg-themeable-dark px-4"
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
                    <SectionTitle>
                        <FormattedMessage id="page.home.subTitle"/>
                    </SectionTitle>
                    <SectionContentText>
                        <ColoredText color="text-themeable-blue">„Lesznek még ennél többen is?”</ColoredText>
                        – kérdezte a tusványosszűz fotós kollégánk a bálványosi szabadegyetem nulladik napján
                        a <ColoredText color="text-themeable-yellow">Tankcsapda-koncert</ColoredText> alatt, amire
                        szinte egyszerre
                        válaszoltuk, hogy igen, <ColoredText color="text-themeable-orange">Orbán Viktoron</ColoredText>.
                    </SectionContentText>
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
