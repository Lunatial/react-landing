import type {Dispatch, SetStateAction} from 'react'
import {useDrag} from 'react-dnd'

import {ItemTypes} from '../../utils/ItemTypes'
import {PocketContentType} from "./index"
import {useModal} from "../../contexts/ModalProvider"

export interface BoxProps {
    setContent: Dispatch<SetStateAction<PocketContentType[]>>
    handlePocketContent: (id: number) => void
    singlePocketContent: PocketContentType
}

interface DropResult {
    name: string
}

export const IndustrialScenarios = ({
                                        setContent,
                                        handlePocketContent,
                                        singlePocketContent
                                    }: BoxProps) => {
    const {openModal,} = useModal()
    const [{isDragging}, drag] = useDrag(() => {
        return ({
            type: ItemTypes.INDUSTRIAL_CANVAS,
            item: singlePocketContent.contentText,
            end: (item, monitor) => {
                const dropResult = monitor.getDropResult<DropResult>()
                if (item && dropResult) {
                    setContent((prev) => {
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
        });
    }, [singlePocketContent])

    const Icon = singlePocketContent.icon

    const opacity = isDragging ? 0 : 1
    return (
        <div
            ref={drag}
            className="flex flex-row cursor-move shadow-lg rounded-xl m-2 p-4 hover:scale-105 active:scale-95 transition-all"
            style={{opacity}}
            onClick={() => openModal({
                modalTitle: singlePocketContent.contentText, ContentComponent: <div className="flex flex-row gap-4">
                    <p>random valami content</p>
                    <Icon className="h-10 w-10"/>
                </div>
            })}
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



