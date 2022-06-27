import React, {ReactNode, useState} from "react"
import {DndProvider, useDrag } from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'

import NextSeo from "../components/NextSeo"

const ItemTypes = {
    KNIGHT: 'knight'
}

function Knight() {
    const [{isDragging}, drag] = useDrag(() => ({
        type: ItemTypes.KNIGHT,
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                fontSize: 25,
                fontWeight: 'bold',
                cursor: 'move',
            }}
        >
            ♘
        </div>
    )
}

type SquareProps = {
    black: boolean
    children: ReactNode
}

function Square({black, children}: SquareProps) {
    const fill = black ? 'black' : 'white'
    const stroke = black ? 'white' : 'black'

    return <div
        style={{
            backgroundColor: fill,
            color: stroke,
            width: '100%',
            height: '100%'
        }}>
        {children}
    </div>
}

function canMoveKnight(toX: number, toY: number, knightPosition: KnightCoords) {
    const [x, y] = knightPosition
    const dx = toX - x
    const dy = toY - y

    return (
        (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
        (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    )
}

// function BoardSquare({ x: number, y: number, children: ReactNode }) {
//     const black = (x + y) % 2 === 1
//     return <Square black={black}>{children}</Square>
// }

function handleSquareClick(toX: number, toY: number, knightPosition: KnightCoords, setKnightPosition: any) {
    if (canMoveKnight(toX, toY, knightPosition)) {
        setKnightPosition([toX, toY])
    }
}

type KnightCoords = [number, number]

function renderSquare(i: number, knightCoords: KnightCoords, setKnightPosition: any) {
    const knightX = knightCoords[0]
    const knightY = knightCoords[1]

    const x = i % 8
    const y = Math.floor(i / 8)
    const isKnightHere = x === knightX && y === knightY
    const black = (x + y) % 2 === 1
    const piece = isKnightHere ? <Knight/> : null

    return (
        <div
            key={i}
            style={{
                width: '12.5%',
                height: '12.5%',
                cursor: canMoveKnight(x, y, [knightX, knightY]) ? "pointer" : "default"
            }}
            onClick={() => handleSquareClick(x, y, [knightX, knightY], setKnightPosition)}>
            <Square black={black}>{piece}</Square>
        </div>
    )
}

type  BoardProps = {
    knightPosition: KnightCoords
    setKnightPosition: any
}

function Board({knightPosition, setKnightPosition}: BoardProps) {
    const squares = []
    for (let i = 0; i < 64; i++) {
        squares.push(renderSquare(i, knightPosition, setKnightPosition))
    }

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexWrap: 'wrap'
            }}
        >
            {squares}
        </div>
    )
}

const ChessPage = () => {
    const [knightPosition, setKnightPosition] = useState<KnightCoords>([0, 0])

    return (
        <DndProvider backend={HTML5Backend}>
            <NextSeo
                title="React-landing"
                description={`React-landing-description`}
            />

            {/*{*/}
            {/*    observe((knightPosition: KnightCoords) => <Board knightPosition={knightPosition} />)*/}
            {/*}*/}

            <Board knightPosition={knightPosition} setKnightPosition={setKnightPosition}/>

        </DndProvider>
    )
}

export default ChessPage
