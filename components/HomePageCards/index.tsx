// @ts-ignore
import bg1 from '../../public/images/homepage/nyito_oldal_helyben_fogyaszthato_eteleink.jpg?webp'
// @ts-ignore
import bg2 from '../../public/images/homepage/nyito_oldal_helyben_fogyaszthato_italaink.jpg?webp'
// @ts-ignore
import bg3 from '../../public/images/homepage/nyito_oldal_megvasarolhato_temékeink.jpg?webp'

const cardContents = [
    {
        title: "HELYBEN FOGYASZTHATÓ ÉTELEINK",
        subtitle: "MINDEN NAP FRISS!",
        description: "Egyedi kézműves ételválogatásunkból biztosítjuk a reggeli, az ebéd és a délutáni vágyat, legyen édes vagy sós!",
        src: bg1,
        alt: "https://firebasestorage.googleapis.com/v0/b/thecaffeinecode.appspot.com/o/blog.jpg?webp?alt=media&token=271cb624-94d4-468d-a14d-455377ba75c2",
    },
    {
        title: "HELYBEN FOGYASZTHATÓ ITALAINK",
        subtitle: "EGYEDI ÍZEK. A TE KÁVÉD.",
        description: "Kávék, teák, frissítők, limonádék, proseccok, rövid italok bőséges választéka.",
        src: bg2,
        alt: "https://firebasestorage.googleapis.com/v0/b/thecaffeinecode.appspot.com/o/blog.jpg?webp?alt=media&token=271cb624-94d4-468d-a14d-455377ba75c2",
    },
    {
        title: "MEGVÁSÁROLHATÓ TERMÉKEK ",
        subtitle: "SHOP ONLINE",
        description: "Szemes kávék, kávégépek, kávédarálók, prosecco italok választéka. Ingyenes kiszállítás 50.000,-Ft vásárlása felett!",
        src: bg3,
        alt: "https://firebasestorage.googleapis.com/v0/b/thecaffeinecode.appspot.com/o/blog.jpg?webp?alt=media&token=271cb624-94d4-468d-a14d-455377ba75c2",
    },
]

const HomePageCards = () => {
    return (
        <div className="flex flex-wrap bg-white drop-shadow-lg">
            {
                cardContents.map(card => {
                    return <div key={card.description} className="p-10 lg:w-1/3">
                        <div className="h-full overflow-hidden">
                            <div className="flex flex-col justify-between h-full">
                                <div>
                                    <p className="font-medium text-center text-4xl font-VinSansPro">
                                        {card.title.split(' ').map(text => {
                                            return <span key={text}>{text}<br/></span>
                                        })}
                                    </p>
                                    <hr className="border-solid border-2 rounded w-100 border-black mx-auto my-5"/>
                                    <div className="my-10">
                                        <p className="text-center">
                                            {card.subtitle}
                                        </p>
                                        <p className="text-center">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>

                                <img className="md:h-48 w-full object-cover object-center"
                                     height={192}
                                     width={432}
                                     src={card.src}
                                     alt={card.alt}/>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default HomePageCards
