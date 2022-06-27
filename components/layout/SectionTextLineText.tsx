import {ReactNode} from "react"

type SectionTextLineTextProps = {
    children: ReactNode
}

const SectionTextLineText = ({children}: SectionTextLineTextProps) => {
    return (
        <section>
            <div className="w-5/6 md:w-1/2 mx-auto my-20">
                {children}
            </div>
        </section>
    )
}

export default SectionTextLineText
