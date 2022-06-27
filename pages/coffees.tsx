import NextSeo from "../components/NextSeo"
import SectionContainer from "../components/layout/SectionContainer"
import SideCard from "../components/SideCard"
import FullWidthBackgroundImage from "../components/FullWidthBackgroundImage"
import IntroTextLineText from "../components/IntroTextLineText"

// @ts-ignore
import bg1 from '../public/images/bg1.png?webp'

// @ts-ignore
import kaveKulonlegesseg1 from '../public/images/kaveink/kavekulonlegessegek_espresso.jpg?webp'
// @ts-ignore
import kaveKulonlegesseg2 from '../public/images/kaveink/kavekulonlegessegek_etiop.jpg?webp'
// @ts-ignore
import kaveKulonlegesseg3 from '../public/images/kaveink/kavekulonlegessegek_india_cherry_aaa.jpg?webp'
// @ts-ignore
import kaveKulonlegesseg4 from '../public/images/kaveink/kavekulonlegessegek_macadamia.jpg?webp'
// @ts-ignore
import kaveKulonlegesseg5 from '../public/images/kaveink/kavekulonlegessegek_barista.jpg?webp'

const coffees = [
    {
        title: "ESPRESSO",
        desc: `Tradicionális olasz pörkölésű kávé, intenzív aroma és tökéletes crema jellemzi. Pörkölőmesterünk tökéletes keresztmetszeten át történő lassú pörköléssel, a legjobb alapanyagokat használva készíti. Gondosan összeállított blend. A kávé csodás íze és illata segít, hogy gond nélkül induljon a nap.`,
        imgSrc: kaveKulonlegesseg1,
    },
    {
        title: "ETIOP SIDAMO",
        desc: `A kávé az etiópiai Sidamo régióból és környékéből származik, ahol az arabica fa először nőtt, ezért is mondják, hogy Etiópia a kávé őshazája. A „fekete aranynak” is nevezett kávé, egy komplex ízű, jellegzetes karakterű, alacsony koffeintartalmú kávé, melyet finom ízvilág jellemez. A gourmand kávéfogyasztók egyik nagy kedvence.`,
        imgSrc: kaveKulonlegesseg2,
    },
    {
        title: "MACADAMIA",
        desc: `Az Ausztrál makadámdió ízesítésű szemes kávé egy különleges ínyencség, amelynek kombinációja jellegzetes ízvilágot hoz el számunkra. Intenzív aromájával és krémes megjelenésével még élvezetesebbé teszi a kávézás örömét.`,
        imgSrc: kaveKulonlegesseg3,
    },
    {
        title: "INDIAI CHERRY AAA",
        desc: `Az indiai Cherry AAA ültetvénykávé egy igazi különlegesség az exkluzív kávé kínálatunkban. Ezt a testes kávét kiváló ízharmónia jellemzi, melyet csak még inkább kiemel enyhe savassága. A három A minősítés garantálja, hogy igazi prémium kávét tartunk a kezünkben.`,
        imgSrc: kaveKulonlegesseg4,
    },
    {
        title: "BARISTA",
        desc: `HIányzó leírás`,
        imgSrc: kaveKulonlegesseg5,
    },
]

const CoffeesPage = () => {
    return (
        <>
            <NextSeo
                title="Lenoa"
                description={`Lenoa`}
            />
            <SectionContainer>
                {
                    coffees.map((coffee, index) => {
                        return <SideCard
                            key={coffee.title + index}
                            textLeft={index % 2 === 0}
                            isLastOne={index + 1 === coffees.length}
                            title={coffee.title}
                            body={coffee.desc}
                            src={coffee.imgSrc}/>
                    })
                }
            </SectionContainer>

            <IntroTextLineText
                mainText={"GYERE EL HOZZÁNK!"}
                altText={
                    `Gyere el hozzánk és próbáld ki egyedi pörkölésű LENOA kávéinkat! A minőségi élelmiszerek gyártása minden területen a célunk, ezért törekszünk arra, hogy a legjobb minőségű kávét biztosítsuk a fogyasztóink számára. Szóljon ez az alapanyagról, készítésről vagy a felszolgálásról. A LENOA ugyanazt a szenvedélyt és figyelmet szentelni a kávéfeldolgozás minden szakaszának, mivel fontos számunkra, hogy fogyasztóink boldogok és elégedettek legyenek.`
                }/>
            <FullWidthBackgroundImage imgUrl={bg1}/>
        </>
    )
}

export default CoffeesPage
