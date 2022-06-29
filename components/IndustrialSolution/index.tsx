import {ComponentProps, useState} from 'react'
import {memo} from 'react'

import {IndustrialScenarios} from './IndustrialScenarios'
import {IndustrialCanvas} from './IndustrialCanvas'

import {VideoCameraIcon, ServerIcon, TerminalIcon, ShieldCheckIcon, PrinterIcon} from "@heroicons/react/solid"

const initialContents = [
    {
        id: 1,
        contentText: "Zseb 1 tartalma",
        icon: VideoCameraIcon
    },
    {
        id: 2,
        contentText: "Zseb 2 tartalma",
        icon: ServerIcon
    },
    {
        id: 3,
        contentText: "Zseb 3 tartalma",
        icon: TerminalIcon
    },
    {
        id: 4,
        contentText: "Zseb 4 tartalma",
        icon: ShieldCheckIcon
    },
    {
        id: 5,
        contentText: "Zseb 5 tartalma",
        icon: PrinterIcon
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
        <div className="container mx-auto overflow-hidden">
            <p className="text-xl text-center text-black font-bold">
                {
                    currentContent
                        ? `${currentContent.length} elem van belehelyezve`
                        : "üres"
                }
            </p>
            <div className="flex flex-row justify-between mt-14">
                <div className="flex flex-col basis-1/3" style={{overflow: 'hidden', clear: 'both'}}>
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
                    />
                </div>
            </div>
        </div>
    )
})
