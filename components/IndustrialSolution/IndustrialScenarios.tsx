import type {FC} from 'react'
import {useDrag} from 'react-dnd'

import {ItemTypes} from '../../utils/ItemTypes'
import {PocketContentType} from "./index"

export interface BoxProps {
    setContent: (arg0: PocketContentType[]) => void
    handlePocketContent: (id: number) => void
    singlePocketContent: PocketContentType
}

interface DropResult {
    name: string
}

export const IndustrialScenarios: FC<BoxProps> = function Box({
                                                                  setContent,
                                                                  handlePocketContent,
                                                                  singlePocketContent
                                                              }) {
    const [{isDragging}, drag] = useDrag(() => ({
        type: ItemTypes.INDUSTRIAL_CANVAS,
        item: singlePocketContent.contentText,
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult<DropResult>()
            if (item && dropResult) {
                setContent(prev => {
                    return [
                        ...prev,
                        singlePocketContent
                    ]
                })
                handlePocketContent(singlePocketContent.id,)
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }), [singlePocketContent])

    const Icon = singlePocketContent.icon

    const opacity = isDragging ? 0 : 1
    return (
        <div
            ref={drag}
            className="flex flex-row cursor-move shadow-lg rounded-xl m-2 p-4"
            style={{opacity}}
        >
            <div className="basis-3/4">
                <div className="m-2">
                    <div className="text-gray-900 font-semibold text-xl mb-2">
                        {singlePocketContent.contentText}
                    </div>
                </div>
            </div>
            <div
                className="basis-1/4 flex justify-end">
                <Icon className="h-10 w-10"/>
            </div>
        </div>
    )
}


