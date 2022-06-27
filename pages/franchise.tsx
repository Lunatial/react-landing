import NextSeo from "../components/NextSeo"
import SideCard from "../components/SideCard"
import SectionContainer from "../components/layout/SectionContainer"
import InfoForm from "../components/InfoForm"

// @ts-ignore
import bg2 from '../public/images/bg2.jpeg?webp'

// @ts-ignore
import franchise1 from '../public/images/franchise/franchise_01.jpg?webp'
// @ts-ignore
import franchise2 from '../public/images/franchise/franchise_02.jpg?webp'
// @ts-ignore
import franchise3 from '../public/images/franchise/franchise_03.jpg?webp'


const rowImages = [
    {
        src: bg2,
        alt: "image",
    },
    {
        src: bg2,
        alt: "image",
    },
    {
        src: bg2,
        alt: "image",
    },
]

const coffees = [
    {
        title: "MILYEN A LENOA KÁVÉZÓ?",
        desc: `Egy modern stílusú kávézó, egy egyedülálló hely, ahol a kávégép mint a templomban az oltár, egy központi szerepet tölt be, a kávé pedig egy vitathatatlan sztár, a minőségi ételek kíséretében, hogy olyan élményt kínálhassanak fogyasztóinknak, amely feltölti érzékeiket, serkenti elméjüket és vidám hangulatot teremtenek egy csésze kávé kíséretében.`,
        imgSrc: franchise1,
    },
    {
        title: "MIRŐL LEHET FELISMERNI A LENOA KÁVÉZÓT?",
        desc: `Elegáns, letisztult dizájn, minden felesleges díszítés nélkül, odafigyelés a legapróbb részletekig, amely kifejezi a Lenoa márka valódiságát, ahol mindig barátságos a környezet.`,
        imgSrc: franchise1,
    },
    {
        title: "MI A LENOA KÁVÉZÓ KONCEPCIÓJA?",
        desc: `A koncepció moduláris, különböző méretekhez és környezethez illeszthető, a felhasznált anyagok természetesek, a pultot és az előkészítő területet úgy alakították ki, hogy minden barista igényét kielégítse.`,
        imgSrc: franchise1,
    },
    {
        title: "MILYEN A KÍNÁLAT?",
        desc: `Italok és ételek teljes választéka a nap bármely szakaszában, a reggelitől a gyors ebédig, illetve az esti aperitifig, vendégeink fogyasztási szokásaihoz igazodva. A Lenoa kávézóban exkluzív ajándékötletet is talál, amit meg lehet vásárolni, mint például a Sanremo kávé és espresso gépek széles választékát otthoni használatra is.`,
        imgSrc: franchise2,
    },
    {
        title: "MILYEN FORMÁTUMBAN MŰKÖDIK A FRANCHISE EGYÜTTMŰKÖDÉS?",
        desc: `A Lenoa csapata minden fázisban támogatást nyújt Önnek. A kávézó tervezésétől a márkaelemek megválasztásáig, a marketing és kommunikációs tevékenységekig, valamint a promóciós anyagokig, továbbá a barista oktatásig. Minőség ellenőrzéseket is végzünk az optimális működés és a minőségi kávé elkészítése és felszolgálása érdekében.`,
        imgSrc: franchise3,
    }
]

const FranchisePage = () => {
    return (
        <>
            <NextSeo
                title="Lenoa"
                description={`Lenoa`}
            />

            <section>
                <div className="bg-stone-600 py-20">
                    <div className="container mx-auto w:5/6 md:w-3/4 lg:w-1/2">
                        <p className="text-5xl text-center font-medium text-white font-VinSansPro">LENOA COFFE & SHOP FRANCHISE</p>
                        <hr className="border-solid border-2 rounded w-1/3 border-slate-200 mx-auto my-5"/>
                        <p className="text-center leading-10 text-white">
                            Franchise lehetőségünk egy exkluzív együttműködés, amely egy Önnel közösen kialakított
                            kávézó a legapróbb részletekig.
                        </p>
                        <p className="text-center leading-10 text-white">
                            A LENOA Coffee & Shop minőség iránti elköteleződése, valamint a kávészeretet és kiváló
                            kézműves kávé hagyományai által ihletett Lenoa kávézó olyan hely, ahol olyan élményben
                            részesülhetünk, amely megjutalmazza az elmét, lelkünket és az érzékszerveket is. Egy olyan
                            környezet, ahol megtalálja a LENOA kávé szortiment teljes kínálatát és a nap bármely
                            szakaszában a tökéletes étel- és italkínálatot.
                        </p>
                        <hr className="border-solid border-2 rounded w-1/3 border-slate-200 mx-auto my-5"/>
                        <p className="text-center leading-10 text-white">
                            Azok számára ajánljuk, akik egy megbízható
                            és jól ismert partnerrel szeretnének vállalkozói tapasztalatot kezdeni, a LENOA Coffee &
                            Shop egy exkluzív kávézó, amelyet teljes egészében Balogh Levente álmodott és tervezett meg.
                            A kávézó megnyitására és üzemeltetésére szakosodott csapatunk know-how-jával és egy
                            elkötelezett franchise menedzserrel nyújtunk támogatást Önöknek.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center mt-10">
                            {
                                rowImages.map((image, index) => {
                                    return <div
                                        key={image.src + index}
                                        className="bg-cover bg-center rounded-full min-w-40 h-40 w-40 m-6 mx-auto"
                                        style={{backgroundImage: `url(${image.src})`}}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>

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
                <InfoForm/>
            </SectionContainer>
        </>
    )
}

export default FranchisePage
