import {useEffect, useState} from "react"

import {motion, AnimatePresence} from "framer-motion"
import {useIntl} from "react-intl"

type ChangingH2Props = {
    text: string
}

const ChangingH2Core = ({text}: ChangingH2Props) => <motion.h2
    className="text-5xl md:text-6xl font-bold my-10 text-themeable-lightGray"
    key={text}
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 2}}
>
    {text}
</motion.h2>

const ChangingH2 = () => {
    const intl = useIntl()
    const [isFirstSubtitle, setIsFirstSubtitle] = useState(true)

    const subTitle1 = intl.formatMessage({id: "page.home.subTitle1"})
    const subTitle2 = intl.formatMessage({id: "page.home.subTitle2"})

    useEffect(() => {
        const myInterval = setInterval(() => {
            setIsFirstSubtitle(prevState => !prevState)
        }, 3000)
        return () => clearInterval(myInterval)
    }, [setIsFirstSubtitle])

    return (
        <AnimatePresence>
            {
                isFirstSubtitle
                    ? <ChangingH2Core text={subTitle1}/>
                    : <ChangingH2Core text={subTitle2}/>
            }
        </AnimatePresence>
    )
}

export default ChangingH2
