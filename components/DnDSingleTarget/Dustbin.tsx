import type {CSSProperties} from 'react'
import {useDrop} from 'react-dnd'


import {pocketContentType} from "./Container"
import {ItemTypes} from './ItemTypes'

const style: CSSProperties = {
    height: '16rem',
    width: '16rem',
    margin: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
    transform: 'rotate3d(1, 1, 1, -5deg)'
}

type DustbinProps = {
    currentContent: pocketContentType | undefined
    removeFromContent: (arg0: pocketContentType) => void
}

export const Dustbin = ({currentContent, removeFromContent}: DustbinProps) => {
    const [{canDrop, isOver}, drop] = useDrop(() => ({
        accept: ItemTypes.BOX,
        drop: () => ({name: 'konténer'}),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))

    const isActive = canDrop && isOver
    let backgroundColor
    if (isActive) {
        backgroundColor = 'darkgreen'
    } else if (canDrop) {
        backgroundColor = 'darkkhaki'
    }

    return (
        <div
            ref={drop}
            className="bg-blue-500 shadow-lg rounded-lg"
            style={{...style, backgroundColor}}
            data-testid="dustbin">
            {
                isActive
                    ? 'Ejtse bele'
                    : currentContent
                        ? currentContent.contentText
                        : 'Cetli ide kerül'
            }
            {
                currentContent && (
                    <div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full flex justify-center items-center">
                        <span
                            className="cursor-pointer p-4 hover:text-yellow-400"
                            onClick={() => {
                                removeFromContent({
                                    id: currentContent.id,
                                    contentText: currentContent.contentText
                                })
                            }}>
                            x
                        </span>
                    </div>
                )
            }
        </div>
    )
}
