import React, {ReactNode, useState} from "react"

import Link from 'next/link'

import {useDrag, useDrop} from 'react-dnd'

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

type OverlayProps = {
    color: string
}

const Overlay = ({color}: OverlayProps) => {
    return <div
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: color,
        }}
    />
}

type BoardSquareProps = {
    x: number
    y: number
    children: ReactNode,
    setKnightPosition: any
    knightCoords: KnightCoords
}

function BoardSquare({x, y, children, setKnightPosition, knightCoords}: BoardSquareProps) {
    const black = (x + y) % 2 === 1
    const [{isOver, canDrop}, drop] = useDrop(() => ({
        accept: ItemTypes.KNIGHT,
        drop: () => setKnightPosition([x, y]),
        canDrop: () => canMoveKnight(x, y, knightCoords),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        }),
    }), [x, y])

    return (
        <div
            ref={drop}
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
            }}
        >
            <Square black={black}>{children}</Square>
            {isOver && !canDrop && <Overlay color="red"/>}
            {!isOver && canDrop && <Overlay color="yellow"/>}
            {isOver && canDrop && <Overlay color="green"/>}
        </div>
    )
}

function handleSquareClick(toX: number, toY: number, knightPosition: KnightCoords, setKnightPosition: any) {
    if (canMoveKnight(toX, toY, knightPosition)) {
        setKnightPosition([toX, toY])
    }
}

function renderPiece(x: number, y: number, pos: KnightCoords) {
    const knightX = pos[0]
    const knightY = pos[1]
    if (x === knightX && y === knightY) {
        return <Knight/>
    }
}

type KnightCoords = [number, number]

function renderSquare(i: number, knightCoords: KnightCoords, setKnightPosition: any) {
    const knightX = knightCoords[0]
    const knightY = knightCoords[1]

    const x = i % 8
    const y = Math.floor(i / 8)
    // const isKnightHere = x === knightX && y === knightY
    // const black = (x + y) % 2 === 1
    // const piece = isKnightHere ? <Knight/> : null

    return (
        <div key={i} style={{width: '12.5%', height: '12.5%'}}>
            <BoardSquare x={x} y={y} setKnightPosition={setKnightPosition} knightCoords={knightCoords}>
                {renderPiece(x, y, knightCoords)}
            </BoardSquare>
        </div>
    )
}


function Board() {
    const [knightPosition, setKnightPosition] = useState<KnightCoords>([0, 0])

    const squares = []
    for (let i = 0; i < 64; i++) {
        squares.push(renderSquare(i, knightPosition, setKnightPosition))
    }
    console.log(knightPosition)
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

    return (
        <>
            <NextSeo
                title="React-landing"
                description={`React-landing-description`}
            />

            <h1>ChessPage</h1>

            <Board/>

        </>
    )
}

export default ChessPage
