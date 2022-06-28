import type {CSSProperties, FC} from 'react'
import {useDrag} from 'react-dnd'

import {ItemTypes} from './ItemTypes'
import {pocketContentType} from "./Container"

const style: CSSProperties = {
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    margin: '0.5rem 1.5rem',
    cursor: 'move',
    transform: 'rotate3d(1, 1, 1, -5deg)'
}

export interface BoxProps {
    contentText: string
    setContent: (arg0: pocketContentType) => void
    handlePocketContent: (id: number) => void
    contentId: number
}

interface DropResult {
    name: string
}

export const Box: FC<BoxProps> = function Box({contentText, setContent, contentId, handlePocketContent}) {
    const [{isDragging}, drag] = useDrag(() => ({
        type: ItemTypes.BOX,
        item: {contentText},
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult<DropResult>()
            if (item && dropResult) {
                setContent({
                    id: contentId,
                    contentText: item.contentText
                })
                handlePocketContent(contentId)
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }))

    const opacity = isDragging ? 0 : 1
    return (
        <div
            ref={drag}
            className="border-solid border-2 border-indigo-600 shadow-lg rounded-lg"
            style={{...style, opacity}}
            data-testid={`box`}>
            {contentText}
        </div>
    )
}
