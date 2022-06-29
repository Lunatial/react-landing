import {useDrop} from 'react-dnd'
import {toast} from "react-toastify"
import {motion} from "framer-motion"

import {PocketContentType} from "./index"
import {ItemTypes} from '../../utils/ItemTypes'

type DustbinProps = {
    currentContent: PocketContentType[] | []
    removeFromContent: (arg0: PocketContentType) => void
}

export const IndustrialCanvas = ({currentContent, removeFromContent,}: DustbinProps) => {
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
            <motion.div
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                className="flex flex-row gap-4"
            >
                {
                    currentContent.length > 0 &&
                    currentContent.map(item => {
                        const Icon = item.icon
                        return <div key={item.id}>
                        <span
                            className="cursor-pointer p-4 hover:text-black hover:scale-150 transition duration-300 ease-in-out"
                            onClick={() => {
                                removeFromContent(item)
                                notify(`Sikeres eltávolítva a ${item.contentText}`)
                            }}>
                            <Icon className="h-20 w-20"/>
                        </span>
                        </div>
                    })
                }
            </motion.div>
        </div>
    )
}
