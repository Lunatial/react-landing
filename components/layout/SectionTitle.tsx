import {ReactNode} from "react"

type SectionTitleProps = {
    children: ReactNode
    dark?: boolean
}

const SectionTitle = ({children, dark = false}: SectionTitleProps) => {
    return (
        <h2 className={`text-5xl md:text-6xl font-bold my-10 ${dark ? "black" : "text-themeable-lightGray"}`}>
            {children}
        </h2>
    )
}

export default SectionTitle
