type SideCardProps = {
    textLeft: boolean,
    title: string,
    subTitle?: string,
    body: string,
    src: string,
    extended?: {
        originOfCoffee: string,
        originOfProduct: string,
        roasting: string,
        price: string,
    },
    isLastOne?: boolean,
}

const SideCard = ({textLeft, title, subTitle, body, src, extended, isLastOne = false}: SideCardProps) => {
    // console.log(`lg:w-1/2 order-none lg:order-${textLeft ? "first" : "last"}`)
    return (
        <div className={`flex flex-col lg:flex-row ${!isLastOne && "mb-20"} drop-shadow-lg`}>
            {/*<div className={`lg:w-1/2 order-last`}>*/}
            <div className={`lg:w-1/2 order-none lg:order-last`}>
                <div className="bg-cover bg-center h-96 lg:h-full" style={{backgroundImage: `url(${src})`}}/>
            </div>
            <div
                className={`w-full lg:w-1/2 flex flex-col p-12 lg:p-28 bg-white order-none lg:order-${textLeft ? "first" : "last"}`}>
                <p className={`text-5xl font-medium font-VinSansPro ${subTitle && "mb-6"}`}>{title}</p>
                {subTitle && (<p className="text-4xl font-medium font-VinSansPro">{subTitle}</p>)}
                <hr className="border-solid border-2 rounded w-full border-black mx-auto my-10"/>
                <p>{body}</p>
                {
                    extended && (
                        <div>
                            <p>
                                <span className="font-medium">Kávé eredete: </span>{extended.originOfCoffee}
                            </p>
                            <p>
                                <span className="font-medium">Származási hely: </span>{extended.originOfProduct}
                            </p>
                            <p>
                                <span className="font-medium">Pörkölés: </span>{extended.roasting}
                            </p>
                            <p>
                                <span className="font-medium">Ár: </span>{extended.price}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default SideCard
