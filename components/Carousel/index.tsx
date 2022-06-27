// @ts-nocheck
import {createRef, useState, useEffect, useRef} from "react"

import {useOnScreen} from "../../utils/useOnScreen"

import styles from './Carousel.module.css'

// @ts-ignore
import nyil1 from '../../public/images/nyil1.svg'
// @ts-ignore
import nyil2 from '../../public/images/nyil2.svg'

type carouseTypes = {
    images: {
        src: string,
        alt: string,
    }[],
    classNameProp?: string
}

const Carousel = ({images, classNameProp}: carouseTypes) => {
    // We will start by storing the index of the current image in the state.
    const [currentImage, setCurrentImage] = useState(0)
    const [refs, setRefs] = useState([])

    const containerRef: any = useRef<HTMLDivElement>()
    // Call the hook passing in ref and root margin
    // In this case it would only be considered onScreen if more ...
    // ... than 300px of element is visible.
    const onScreen: boolean = useOnScreen<HTMLDivElement>(containerRef, "0px")

    useEffect(() => {
        // // We are using react ref to 'tag' each of the images. Below will create an array of
        // // objects with numbered keys. We will use those numbers (i) later to access a ref of a
        // // specific image in this array.
        setRefs(images.reduce((acc, val, i) => {
            acc[i] = createRef()
            return acc
        }, {}))
    }, [setRefs])

    const scrollToImage = i => {
        // First let's set the index of the image we want to see next
        setCurrentImage(i)
        // Now, this is where the magic happens. We 'tagged' each one of the images with a ref,
        // we can then use built-in scrollIntoView API to do exactly what it says on the box - scroll it into
        // your current view! To do so we pass an index of the image, which is then use to identify our current
        // image's ref in 'refs' array above.
        refs[i].current.scrollIntoView({
            //     Defines the transition animation.
            behavior: 'smooth',
            //      Defines vertical alignment.
            block: 'nearest',
            //      Defines horizontal alignment.
            inline: 'start',
            //      The bottom of the element will be aligned to the bottom of the visible area of the scrollable ancestor.
            align: false,
        })
    }

    // Some validation for checking the array length could be added if needed
    const totalImages = images.length

    // Below functions will assure that after last image we'll scroll back to the start,
    // or another way round - first to last in previousImage method.
    const nextImage = () => {
        if (currentImage >= totalImages - 1) {
            scrollToImage(0)
        } else {
            scrollToImage(currentImage + 1)
        }
    }

    const previousImage = () => {
        if (currentImage === 0) {
            scrollToImage(totalImages - 1)
        } else {
            scrollToImage(currentImage - 1)
        }
    }

    // Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.
    const arrowStyle =
        'absolute text-white text-2xl z-10 h-10 w-10 rounded-full opacity-100 hover:opacity-50 transition-all flex items-center justify-center'

    // Let's create dynamic buttons. It can be either left or right. Using
    // isLeft boolean we can determine which side we'll be rendering our button
    // as well as change its position and content.
    const SliderControl = ({isLeft}) => (
        <button
            type="button"
            onClick={isLeft ? previousImage : nextImage}
            className={`${arrowStyle} ${isLeft ? 'left-2' : 'right-2'}`}
            style={{top: '50%'}}>
            <img src={isLeft ? nyil1 : nyil2} alt={"arrow"} height={20} width={20}/>
        </button>
    )

    useEffect(() => {
        let paginate
        if (onScreen) {
            paginate = setInterval(nextImage, 4000)
        }


        return () => {
            if(paginate) {
                clearInterval(paginate)
            }
        }
    }, [nextImage, onScreen])

    return (
        // Images are placed using inline flex. We then wrap an image in a div
        // with flex-shrink-0 to stop it from 'shrinking' to fit the outer div.
        // Finally the image itself will be 100% of a parent div. Outer div is
        // set with position relative, so we can place our control buttons using
        // absolute positioning on each side of the image.
        <div className={`flex justify-center items-center ${classNameProp}`} ref={containerRef}>
            <div className="relative">
                <div className={styles.carousel}>
                    <SliderControl isLeft={true}/>
                    {images.map((img, i) => (
                        <div className="flex-shrink-0" key={img.src} ref={refs[i]}>
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="h-96 sm:h-140 lg:h-700"
                                width={'100%'}
                                height={700}
                            />
                        </div>
                    ))}
                    <SliderControl isLeft={false}/>
                </div>
            </div>
        </div>
    )
}

export default Carousel
