import {useState} from 'react'
import {memo} from 'react'

import {Box} from './Box'
import {Dustbin} from './Dustbin'

const initialContents = [
    {
        id: 1,
        contentText: "Zseb 1 tartalma",
    },
    {
        id: 2,
        contentText: "Zseb 2 tartalma",
    },
    {
        id: 3,
        contentText: "Zseb 3 tartalma",
    },
    {
        id: 4,
        contentText: "Zseb 4 tartalma",
    },
    {
        id: 5,
        contentText: "Zseb 5 tartalma",
    },
]

export type pocketContentType = { id: number, contentText: string }

export const Container = memo(() => {
    const [currentContent, setContent] = useState<pocketContentType>()
    const [pocketContent, setPocketContent] = useState<pocketContentType[]>(initialContents)

    const handlePocketContent = (id: number) => {
        setPocketContent(prev => {
                return prev.filter(item => item.id !== id)
            }
        )
    }

    const removeFromContent = (removeFromContent: pocketContentType) => {
        setContent(undefined)
        setPocketContent(prev => {
                return [
                    ...prev,
                    removeFromContent
                ]
            }
        )
    }

    return (
        <div className="container mx-auto">
            <p className="text-xl text-center text-black font-bold">
                {
                    currentContent
                        ? `Belerakta a "${currentContent.contentText}"-t.`
                        : "üres"
                }
            </p>
            <div className="flex flex-row justify-between mt-14">
                <div className="flex flex-col" style={{overflow: 'hidden', clear: 'both'}}>
                    {
                        pocketContent.map(singlePocketContent => {
                            return <Box
                                key={singlePocketContent.id}
                                contentText={singlePocketContent.contentText}
                                contentId={singlePocketContent.id}
                                handlePocketContent={handlePocketContent}
                                setContent={setContent}/>
                        })
                    }
                </div>
                <div className="flex" style={{overflow: 'hidden', clear: 'both'}}>
                    <Dustbin
                        currentContent={currentContent}
                        removeFromContent={removeFromContent}
                    />
                </div>
            </div>
        </div>
    )
})
