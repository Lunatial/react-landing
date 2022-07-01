import {useEffect} from "react"
import {useDrop} from 'react-dnd'
import {toast} from "react-toastify"
import {motion, useAnimation} from "framer-motion"

import {PocketContentType} from "./index"
import {ItemTypes} from '../../utils/ItemTypes'

type DustbinProps = {
    currentContent: PocketContentType[] | []
    removeFromContent: (arg0: PocketContentType) => void
    startAnimation: boolean
}

export const IndustrialCanvas = ({currentContent, removeFromContent, startAnimation,}: DustbinProps) => {
    const controls = useAnimation()
    const [{canDrop, isOver}, drop] = useDrop(() => {
        return {
            accept: ItemTypes.INDUSTRIAL_CANVAS,
            drop: () => ({name: 'vászon'}),
            canDrop: () => true,
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
                canDrop: !!monitor.canDrop()
            })
        }
    }, [currentContent])

    useEffect(() => {
        if (startAnimation) {
            controls.start((i) => ({
                x: [10, 40, 50, 40, 10],
                y: [50, 80, 100, 110, 120],
                scale: [1, 1.2, 1.3, 1.2, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "30%", "50%", "20%"],
                transition: {
                    delay: i * 0.3,
                    duration: 3,
                },
            }))
        }
    }, [controls, startAnimation])

    const notify = (text: string) => toast.success(text)

    const isActive = canDrop && isOver
    let backgroundColor
    if (isActive) {
        backgroundColor = 'darkgreen'
    } else if (canDrop) {
        backgroundColor = 'darkkhaki'
    } else if (isOver && !canDrop) {
        backgroundColor = 'red'
    }

    return (
        <div
            ref={drop}
            className="bg-blue-500 shadow-lg rounded-lg transition-all w-full h-96 p-2 text-white text-center text-lg"
            style={{backgroundColor}}
            data-testid="dustbin">
            {
                isActive
                    ? 'Ejtse bele'
                    : currentContent
                        ? `Elemek száma: ${currentContent.length}`
                        : 'Cetli ide kerül'
            }
            <div className="flex flex-row gap-4">
                {
                    currentContent.length > 0 &&
                    currentContent.map((item, index) => {
                        const Icon = item.icon
                        return <motion.div key={item.id} custom={index} animate={controls}>
                        <span
                            className="cursor-pointer p-4 hover:text-black hover:scale-150 transition duration-300 ease-in-out"
                            onClick={() => {
                                removeFromContent(item)
                                notify(`Sikeres eltávolítva a ${item.contentText}`)
                            }}>
                            <Icon className="h-20 w-20"/>
                        </span>
                        </motion.div>
                    })
                }
            </div>
        </div>
    )
}
