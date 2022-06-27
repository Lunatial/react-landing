import NextSeo from "../components/NextSeo"
import SectionContainer from "../components/layout/SectionContainer"
import SideCard from "../components/SideCard"
import FullWidthBackgroundImage from "../components/FullWidthBackgroundImage"
import IntroTextLineText from "../components/IntroTextLineText"

// @ts-ignore
import bg3 from '../public/images/bg3.png?webp'
// @ts-ignore
import baristaImg from '../public/images/lenoa_kaves_zacskok/barista_250g.jpg?webp'
// @ts-ignore
import blackArtImg from '../public/images/lenoa_kaves_zacskok/black_art_250g.jpg?webp'
// @ts-ignore
import cubatImg from '../public/images/lenoa_kaves_zacskok/cuba_250g.jpg?webp'
// @ts-ignore
import decafImg from '../public/images/lenoa_kaves_zacskok/decaf_250g.jpg?webp'
// @ts-ignore
import espressoImg from '../public/images/lenoa_kaves_zacskok/espresso_250g.jpg?webp'
// @ts-ignore
import etiopSidamoImg from '../public/images/lenoa_kaves_zacskok/etiop_sidamo_250g.jpg?webp'
// @ts-ignore
import guatemalaImg from '../public/images/lenoa_kaves_zacskok/guatemala_250g.jpg?webp'
// @ts-ignore
import indiaCherryImg from '../public/images/lenoa_kaves_zacskok/india_cherry_aaa_250g.jpg?webp'
// @ts-ignore
import macadamiaImg from '../public/images/lenoa_kaves_zacskok/macadamia_250g.jpg?webp'
// @ts-ignore
import redImg from '../public/images/lenoa_kaves_zacskok/red_250g.jpg?webp'

const coffees = [
    {
        title: "ESPRESSO",
        subTitle: "100% arabica szemes kávé",
        desc: `Tradícionális olasz pörkölésű kávé, intenzív aroma és tökéletes crema jellemzi. Pörkölőmesterünk tökéletes keresztmetszeten át történő lassú pörköléssel, a legjobb alapanyagokat használva készíti. Gondosan összeállított blend. A kávé csodás íze és illata segít, hogy gond nélkül induljon a nap.`,
        extended: {
            originOfCoffee: "Dél és Közép-Amerika, Afrika, Távol-Kelet",
            originOfProduct: "Magyarország",
            roasting: "közepes",
            price: "250g / 2690 ft",
        },
        imgSrc: espressoImg,
    },
    {
        title: "INDIA CHERRY AAA",
        subTitle: "100% arabica szemes kávé",
        desc: `Az indiai Cherry AAA ültetvénykávé egy igazi különlegesség az exkluzív kávé kínálatunkban. Ezt a testes kávét kiváló ízharmónia jellemzi, melyet csak még inkább kiemel enyhe savassága. A három A minősítés garantálja, hogy igazi prémium kávét tartunk a kezünkben.`,
        extended: {
            originOfCoffee: "India",
            originOfProduct: "Magyarország",
            roasting: "közepes",
            price: "250g / 3690 ft",
        },
        imgSrc: indiaCherryImg,
    },
    {
        title: "GUATEMALA",
        subTitle: "100% arabica szemes kávé",
        desc: `Guatemalát Közép-Amerika legnagyobb kávétermelő országának tekintik és sok szakember szerint a világ egyik legjobb kávéjáról beszélünk. A guatemalai kávét általában nagyobb tengerszint feletti magasságokban, gyakran vulkáni talajon termesztik. Ennek köszönhetően egyedi ízzel ékeskedhet. Markáns édessége, testes megjelenése, tökéletesen harmonizál a fűszeres, csokoládés, karamellás ízvilágával, melyet kellemes citrus és méz jegyek kísérnek.`,
        extended: {
            originOfCoffee: "Guatemala, Közép-Amerika",
            originOfProduct: "Magyarország",
            roasting: "világos",
            price: "250g / 3690 ft",
        },
        imgSrc: guatemalaImg,
    },
    {
        title: "CUBA",
        subTitle: "100% arabica szemes kávé",
        desc: `A Serrano Lavado Superior egy ritka különleges kubai kávé fajta, a kávé világának, egyik legkisebb országából származik. Eredeti és tüzes ízű, illatában a kubai szivar is fellelhető. A sziget keleti részén, a Sierra Mestra körüli meredek lejtőkről származik. Kiegyensúlyozott, fűszeresen telt aromájú, elegánsan testes megjelenésű kávé. Hihetetlenül hosszan tartó lecsengését ma is titok övezi.`,
        extended: {
            originOfCoffee: "Kuba",
            originOfProduct: "Magyarország",
            roasting: "közepes",
            price: "250g / 3690 ft",
        },
        imgSrc: cubatImg,
    },
    {
        title: "MACADAMIA",
        subTitle: "Makadámdió ízesítésű szemes kávé",
        desc: `Az Ausztrál makadámdió ízesítésű szemes kávé egy különleges ínyencség, amelynek kombinációja jellegzetes ízvilágot hoz el számunkra. Intenzív aromájával és krémes megjelenésével még élvezetesebbé teszi a kávézás örömét.`,
        extended: {
            originOfCoffee: "Brazília",
            originOfProduct: "Magyarország",
            roasting: "közepes",
            price: "250g / 2900 ft",
        },
        imgSrc: macadamiaImg,
    },
    {
        title: "ETIOP SIDAMO",
        subTitle: "100% arabica szemes kávé",
        desc: `A kávé az etiópiai Sidamo régióból és környékéből származik, ahol az arabica fa először nőtt, ezért is mondják, hogy Etiópia a kávé őshazája. A „fekete aranynak” is nevezett kávé, egy komplex ízű, jellegzetes karakterű, alacsony koffeintartalmú kávé, melyet finom ízvilág jellemez. A gourman kávéfogyasztók egyik nagy kedvence.`,
        extended: {
            originOfCoffee: "Etiópia ",
            originOfProduct: "Magyarország",
            roasting: "közepes",
            price: "250g / 3690 ft",
        },
        imgSrc: etiopSidamoImg,
    },
    {
        title: "BLACK ART",
        subTitle: "80% robusta és 20% arabica szemes kávé blend",
        desc: `Nagyszerű íz, csábítóan bársonyos cremával. Az olaszos hangulatot idéző lágy aromájú keveréknek és a különleges pörkölésnek köszönhetően a Black Art kitűnő választás mindenfajta otthoni kávéital elkészítéséhez.`,
        extended: {
            originOfCoffee: "Brazilia és Afrika",
            originOfProduct: "Magyarország",
            roasting: "közepes",
            price: "250g / 1990 ft",
        },
        imgSrc: blackArtImg,
    },
    {
        title: "RED",
        subTitle: "szemes kávé blend",
        desc: `Nagyszerű íz, csábítóan bársonyos cremával. Az olaszos hangulatot idéző lágy aromájú keveréknek és a különleges pörkölésnek köszönhetően a Black Art kitűnő választás mindenfajta otthoni kávéital elkészítéséhez.`,
        extended: {
            originOfCoffee: "Brazilia és Afrika",
            originOfProduct: "Magyarország",
            roasting: "közepes",
            price: "250g / 1990 ft",
        },
        imgSrc: redImg,
    },
    {
        title: "DECAF",
        subTitle: "100% arabica koffeinmentes pörkölt szemes kávé",
        desc: `Swiss Water®, azaz a Svájci-vizes koffeinmentesítő eljárással készült kávé, amely teljesen környezetbarát. A folyamat lényege, hogy olyan vizes eljárással és aktív szénszűrőn keresztül történik a koffein kivonása a kávészemekből, amelyhez tiszta édesvízet haszn álnak. Ez biztosítja a kávébab minőségét, valamint, hogy a kávészemekből kizárólag a koffein tudjon kioldódni és az értékes aromák pedig bent maradjanak.`,
        extended: {
            originOfCoffee: "Közép-Amerika",
            originOfProduct: "Magyarország",
            roasting: "közepes",
            price: "250g / 2590 ft",
        },
        imgSrc: decafImg,
    },
]

const CoffeesPage = () => {
    return (
        <>
            <NextSeo
                title="Lenoa"
                description={`Lenoa`}
            />

            <IntroTextLineText
                mainText={"EXCLUSIVE KÁVÉKÜLÖNLEGESSÉGEK"}
                altText={
                    'A vendéglátás művészete változik. Az ügyfeleink ma már jobbat keresnek, és csak a legjobbat akarják az élet minden területén. Amikor kiválasztjuk, pörköljük és becsomagoljuk a LENOA kávéinkat, a fogyasztóink elégedettségére és mosolyára gondolunk.'
                }/>

            <FullWidthBackgroundImage imgUrl={bg3}/>

            <SectionContainer>
                {
                    coffees.map((coffee, index) => {
                        return <SideCard
                            key={coffee.title + index}
                            textLeft={index % 2 === 0}
                            isLastOne={index + 1 === coffees.length}
                            title={coffee.title}
                            subTitle={coffee.subTitle}
                            body={coffee.desc}
                            extended={coffee.extended}
                            src={coffee.imgSrc}/>
                    })
                }
            </SectionContainer>
        </>
    )
}

export default CoffeesPage
