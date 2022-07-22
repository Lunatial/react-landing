import {ReactNode} from "react"

type SectionContentTextProps = {
    children: ReactNode
    dark?: boolean
}

const SectionContentText = ({children, dark = false}: SectionContentTextProps) => {
    return (
        <p className={`font-bold my-10 ${dark ? "black" : "text-themeable-lightGray"}`}>
            {children}
        </p>
    )
}

export default SectionContentText
