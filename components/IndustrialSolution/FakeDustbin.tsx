import type {CSSProperties} from 'react'
import {useDrop} from 'react-dnd'


import {pocketContentType} from "./Container"
import {ItemTypes} from '../../utils/ItemTypes'

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
    transform: 'rotate3d(1, 1, 1, 5deg)',
}

type DustbinProps = {
    currentContent: pocketContentType | undefined
    removeFromContent: (arg0: pocketContentType) => void
}

export const FakeDustbin = ({currentContent, removeFromContent}: DustbinProps) => {
    const [{canDrop, isOver}, drop] = useDrop(() => {
        return {
            accept: ItemTypes.BOX,
            drop: () => ({name: 'hamis konténer'}),
            canDrop: () => false,
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
                canDrop: !!monitor.canDrop()
            })
        }
    }, [currentContent])

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
            className="bg-gray-400 shadow-lg rounded-lg transition-all"
            style={{...style, backgroundColor}}
            data-testid="dustbin">
            Hamis doboz
        </div>
    )
}
