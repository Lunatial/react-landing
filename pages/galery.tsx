import {useEffect, useState} from 'react'
// @ts-ignore
import {disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks} from 'body-scroll-lock'

import NextSeo from "../components/NextSeo"
import GaleryModal from "../components/Modal"

// @ts-ignore
import bg1 from '../public/images/galeria/dsc05532.jpg?webp'
// @ts-ignore
import bg2 from '../public/images/galeria/dsc05543.jpg?webp'
// @ts-ignore
import bg3 from '../public/images/galeria/dsc05558.jpg?webp'
// @ts-ignore
import bg4 from '../public/images/galeria/dsc05596.jpg?webp'
// @ts-ignore
import bg5 from '../public/images/galeria/dsc05601.jpg?webp'
// @ts-ignore
import bg6 from '../public/images/galeria/dsc05693.jpg?webp'
// @ts-ignore
import bg7 from '../public/images/galeria/dsc05900.jpg?webp'
// @ts-ignore
import bg8 from '../public/images/galeria/dsc05989.jpg?webp'
// @ts-ignore
import bg9 from '../public/images/galeria/dsc06025.jpg?webp'
// @ts-ignore
import bg10 from '../public/images/galeria/dsc06131.jpg?webp'

const galeryImages = [
    {
        src: bg1,
        alt: "image"
    },
    {
        src: bg2,
        alt: "image"
    },
    {
        src: bg5,
        alt: "image"
    },
    {
        src: bg3,
        alt: "image"
    },
    {
        src: bg4,
        alt: "image"
    },
    {
        src: bg7,
        alt: "image"
    },
    {
        src: bg9,
        alt: "image"
    },
    {
        src: bg6,
        alt: "image"
    },
    {
        src: bg8,
        alt: "image"
    },
    {
        src: bg10,
        alt: "image"
    },
]

const GaleryPage = () => {
    const [open, setOpen] = useState(false)
    const [src, setSrc] = useState("")

    useEffect(() => {
        const body = document.querySelector('body')
        if(open) {
            disableBodyScroll(body)
        } else {
            enableBodyScroll(body)
        }
        return () => clearAllBodyScrollLocks()
    }, [open])

    const handleOpen = (imgSrc: string) => {
        setOpen(prevState => !prevState)
        setSrc(imgSrc)
    }

    return (
        <>
            <NextSeo
                title="Lenoa"
                description={`Lenoa`}
            />
            <GaleryModal open={open} src={src} setOpen={setOpen}/>

            <section>
                <div className="my-20">
                    <h1 className="text-5xl text-center font-medium my-10 font-VinSansPro">GALÉRIA</h1>
                    <hr className="border-solid border-2 rounded w-1/4 border-black mx-auto my-5"/>

                    <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mx-auto">
                        {
                            galeryImages.map((image, index) => {
                                return <div key={index} className="w-full h-full rounded cursor-pointer"
                                            onClick={() => handleOpen(image.src)}>
                                    <img
                                        className="h-full"
                                        src={image.src}
                                        alt={image.alt}
                                        loading="lazy" />
                                </div>
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default GaleryPage
