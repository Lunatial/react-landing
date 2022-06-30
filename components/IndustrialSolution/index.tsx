import {ComponentProps, useState} from 'react'
import {memo} from 'react'

import {IndustrialScenarios} from './IndustrialScenarios'
import {IndustrialCanvas} from './IndustrialCanvas'

import {VideoCameraIcon, ServerIcon, TerminalIcon, ShieldCheckIcon, ChartBarIcon, PlayIcon} from "@heroicons/react/solid"

const initialContents = [
    {
        id: 1,
        contentText: "Cognex",
        icon: VideoCameraIcon
    },
    {
        id: 2,
        contentText: "DimHob",
        icon: ServerIcon
    },
    {
        id: 3,
        contentText: "DimInt",
        icon: TerminalIcon
    },
    {
        id: 4,
        contentText: "DimPong",
        icon: ShieldCheckIcon
    },
    {
        id: 5,
        contentText: "DimCsoki",
        icon: ChartBarIcon
    },
]

export type HeroIcon = (props: ComponentProps<'svg'>) => JSX.Element

export type PocketContentType = {
    id: number,
    contentText: string,
    icon: HeroIcon
}

export const IndustrialSolutionContainer = memo(function IndustrialSolution() {
    const [currentContent, setContent] = useState<PocketContentType[]>([])
    const [pocketContent, setPocketContent] = useState<PocketContentType[]>(initialContents)
    const [startAnimation, setStartAnimation] = useState<boolean>(false)

    const handlePocketContent = (id: number) => {
        setPocketContent(prev => {
                return prev.filter(item => item.id !== id)
            }
        )
    }

    const removeFromContent = (removeFromContent: PocketContentType) => {
        setContent((prev => {
                return prev.filter(item => item.id !== removeFromContent.id)
            }
        ))
        setPocketContent(prev => {
                return [
                    ...prev,
                    removeFromContent
                ]
            }
        )
    }

    return (
        <div className="container mx-auto my-4 overflow-hidden">
            <p className="text-xl text-center text-black font-bold">
                {
                    currentContent.length > 0
                        ? `${currentContent.length} elem van belehelyezve`
                        : "üres"
                }
            </p>
            <div className="flex flex-col lg:flex-row justify-between mt-14">
                <div className="flex flex-col basis-1/3">
                    {
                        pocketContent.map(singlePocketContent => {
                            return <IndustrialScenarios
                                key={singlePocketContent.id}
                                singlePocketContent={singlePocketContent}
                                handlePocketContent={handlePocketContent}
                                setContent={setContent}/>
                        })
                    }
                </div>
                <div className="flex flex-col basis-1/2" style={{overflow: 'hidden', clear: 'both'}}>
                    <IndustrialCanvas
                        currentContent={currentContent}
                        removeFromContent={removeFromContent}
                        startAnimation={startAnimation}
                    />
                    <div className="flex justify-end">
                        <div
                            className={`shadow-lg rounded-lg ${currentContent.length > 0 ? "bg-fuchsia-400" : "bg-gray-200"} active:bg-fuchsia-300 p-2 mt-4`}>
                            <PlayIcon
                                className={`text-white h-20 w-20 ${currentContent.length > 0 ? "cursor-pointer" : "cursor-normal"}`}
                                onClick={() => {
                                    setStartAnimation(true)
                                    setTimeout(() => {
                                        setStartAnimation(false)
                                    }, currentContent.length * 300)
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})
