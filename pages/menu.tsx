import NextSeo from "../components/NextSeo"

// @ts-ignore
import bg2 from '../public/images/bg2.jpeg?webp'

const menu = {
    coffees: {
        title: "ESPRESSO",
        products: [
            {name: "Cappuccino", price: 880, desc: "Rövid leírás, milyen ízvilágú, pörkölésű a kv"},
            {name: "Cappuccino", price: 880, desc: "Rövid leírás, milyen ízvilágú, pörkölésű a kv"},
            {name: "Cappuccino", price: 880, desc: "Rövid leírás, milyen ízvilágú, pörkölésű a kv"},
            {name: "Cappuccino", price: 880, desc: "Rövid leírás, milyen ízvilágú, pörkölésű a kv"},
            {name: "Cappuccino", price: 880, desc: "Rövid leírás, milyen ízvilágú, pörkölésű a kv"},
            {name: "Cappuccino", price: 880, desc: "Rövid leírás, milyen ízvilágú, pörkölésű a kv"},
            {name: "Cappuccino", price: 880, desc: "Rövid leírás, milyen ízvilágú, pörkölésű a kv"},
            {name: "Cappuccino", price: 880, desc: "Rövid leírás, milyen ízvilágú, pörkölésű a kv"},
            {name: "Cappuccino", price: 880, desc: "Rövid leírás, milyen ízvilágú, pörkölésű a kv"},
            {name: "Cappuccino", price: 880, desc: "Rövid leírás, milyen ízvilágú, pörkölésű a kv"},
            {name: "Cappuccino", price: 880, desc: "Rövid leírás, milyen ízvilágú, pörkölésű a kv"},
        ]
    },
    sandwiches: {
        title: "SZENDVICS / TAPAS",
        products: [
            {
                name: "Szalámis szendvics",
                price: 1880,
                desc: "Rövid leírás, mit tartalmaz pontosan az étel. Allergia faktorokat megjelölni."
            },
            {
                name: "Szalámis szendvics",
                price: 1880,
                desc: "Rövid leírás, mit tartalmaz pontosan az étel. Allergia faktorokat megjelölni."
            },
            {
                name: "Szalámis szendvics",
                price: 1880,
                desc: "Rövid leírás, mit tartalmaz pontosan az étel. Allergia faktorokat megjelölni."
            },
            {
                name: "Szalámis szendvics",
                price: 1880,
                desc: "Rövid leírás, mit tartalmaz pontosan az étel. Allergia faktorokat megjelölni."
            },
            {
                name: "Szalámis szendvics",
                price: 1880,
                desc: "Rövid leírás, mit tartalmaz pontosan az étel. Allergia faktorokat megjelölni."
            },
            {
                name: "Szalámis szendvics",
                price: 1880,
                desc: "Rövid leírás, mit tartalmaz pontosan az étel. Allergia faktorokat megjelölni."
            },
            {
                name: "Szalámis szendvics",
                price: 1880,
                desc: "Rövid leírás, mit tartalmaz pontosan az étel. Allergia faktorokat megjelölni."
            },
            {
                name: "Szalámis szendvics",
                price: 1880,
                desc: "Rövid leírás, mit tartalmaz pontosan az étel. Allergia faktorokat megjelölni."
            },
            {
                name: "Szalámis szendvics",
                price: 1880,
                desc: "Rövid leírás, mit tartalmaz pontosan az étel. Allergia faktorokat megjelölni."
            },
            {
                name: "Szalámis szendvics",
                price: 1880,
                desc: "Rövid leírás, mit tartalmaz pontosan az étel. Allergia faktorokat megjelölni."
            },
            {
                name: "Szalámis szendvics",
                price: 1880,
                desc: "Rövid leírás, mit tartalmaz pontosan az étel. Allergia faktorokat megjelölni."
            },
        ]
    },
}

const MenuPage = () => {
    return (
        <>
            <NextSeo
                title="Lenoa"
                description={`Lenoa-menu`}
            />
            <div className="container mx-auto my-20">
                <h1 className="text-6xl text-center font-medium mt-5 font-VinSansPro">MENU</h1>
                <hr className="border-solid border-2 rounded w-1/3 border-black mx-auto my-10"/>
                <div className="flex flex-row">
                    <div className="basis-0 md:basis-1/4 flex flex-col justify-between pr-10">
                        <div className="hidden md:flex justify-end">
                            <div
                                className="bg-cover bg-center rounded-full min-w-40 h-40 w-40 m-6"
                                style={{backgroundImage: `url(${bg2})`}}/>
                        </div>
                        <div className="hidden md:flex justify-end">
                            <div
                                className="bg-cover bg-center rounded-full min-w-40 h-40 w-40 m-6"
                                style={{backgroundImage: `url(${bg2})`}}/>
                        </div>
                    </div>
                    <div className="basis-full md:basis-1/2">
                        <p className="text-center text-5xl font-medium my-6 font-VinSansPro">{menu.coffees.title}</p>
                        {
                            menu.coffees.products.map((coffee, index) => {
                                return <div key={index} className="w-full mx-auto mb-4">
                                    <div className="text-div flex flex-row justify-between">
                                        <span className="text-span text-lg">{coffee.name}</span>
                                        <span className="text-span pull-right">{coffee.price}</span>
                                    </div>
                                    <p>{coffee.desc}</p>
                                </div>
                            })
                        }
                    </div>
                    <div className="basis-0 md:basis-1/4 pl-10">
                        <div className="hidden md:flex flex-col justify-center h-full">
                            <div
                                className="bg-cover bg-center rounded-full min-w-40 h-40 w-40 m-6"
                                style={{backgroundImage: `url(${bg2})`}}/>
                        </div>
                    </div>
                </div>

                <hr className="border-solid border-2 rounded w-1/3 border-black mx-auto my-10"/>

                <div className="flex flex-row">
                    <div className="basis-0 md:basis-1/4 pr-10">
                        <div className="flex flex-col justify-center h-full">
                            <div className="hidden md:flex justify-end">
                                <div
                                    className="bg-cover bg-center rounded-full min-w-40 h-40 w-40 m-6"
                                    style={{backgroundImage: `url(${bg2})`}}/>
                            </div>
                        </div>
                    </div>
                    <div className="basis-full md:basis-1/2">
                        <p className="text-center text-5xl font-medium my-6 font-VinSansPro">{menu.sandwiches.title}</p>
                        {
                            menu.sandwiches.products.map((sandwich, index) => {
                                return <div key={index} className="w-full mx-auto mb-4">
                                    <div className="text-div flex flex-row justify-between">
                                        <span className="text-span text-lg">{sandwich.name}</span>
                                        <span className="text-span pull-right">{sandwich.price}</span>
                                    </div>
                                    <p>{sandwich.desc}</p>
                                </div>
                            })
                        }
                    </div>
                    <div className="basis-0 md:basis-1/4 flex flex-col justify-between pl-10">
                        <div className="hidden md:flex">
                            <div
                                className="bg-cover bg-center rounded-full min-w-40 h-40 w-40 m-6"
                                style={{backgroundImage: `url(${bg2})`}}/>
                        </div>
                        <div className="hidden md:flex">
                            <div
                                className="bg-cover bg-center rounded-full min-w-40 h-40 w-40 m-6"
                                style={{backgroundImage: `url(${bg2})`}}/>
                        </div>
                    </div>
                </div>
                <hr className="border-solid border-2 rounded w-1/3 border-black mx-auto my-20"/>
            </div>
        </>
    )
}

export default MenuPage
