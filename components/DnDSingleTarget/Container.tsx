import {useState} from 'react'
import {memo} from 'react'

import {AnimatePresence, motion} from "framer-motion"

import {Box} from './Box'
import {Dustbin} from './Dustbin'
import {FakeDustbin} from './FakeDustbin'

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

    const variants = {
        visible: {opacity: 1, y: 0},
        hidden: {opacity: 0, y: -50},
        exit: {opacity: 0, x: 150},
    }

    return (
        <div className="container mx-auto overflow-hidden">
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
                <div className="flex flex-col" style={{overflow: 'hidden', clear: 'both'}}>
                    <Dustbin
                        currentContent={currentContent}
                        removeFromContent={removeFromContent}
                    />
                    <FakeDustbin
                        currentContent={currentContent}
                        removeFromContent={removeFromContent}
                    />
                </div>
            </div>
            <AnimatePresence>
                {currentContent && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={variants}>
                        <p className="text-2xl italic, text-center my-2">{currentContent.contentText}</p>
                        <div className="grid grid-cols-2 gap-6">
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut dolores, ducimus
                                enim
                                facere
                                impedit ipsa itaque laborum laudantium, libero nam pariatur perspiciatis quae quidem,
                                quo
                                sint
                                tempora unde voluptate.
                            </div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut dolores, ducimus
                                enim
                                facere
                                impedit ipsa itaque laborum laudantium, libero nam pariatur perspiciatis quae quidem,
                                quo
                                sint
                                tempora unde voluptate.
                            </div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut dolores, ducimus
                                enim
                                facere
                                impedit ipsa itaque laborum laudantium, libero nam pariatur perspiciatis quae quidem,
                                quo
                                sint
                                tempora unde voluptate.
                            </div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut dolores, ducimus
                                enim
                                facere
                                impedit ipsa itaque laborum laudantium, libero nam pariatur perspiciatis quae quidem,
                                quo
                                sint
                                tempora unde voluptate.
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
})
