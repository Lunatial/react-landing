import {ReactNode} from "react"

type SectionContainerProps = {
    children: ReactNode
}

const SectionContainer = ({children}: SectionContainerProps) => {
    return (
        <section>
            <div className="bg-gray-200">
                <div className="container mx-auto py-20">
                    {children}
                </div>
            </div>
        </section>
    )
}

export default SectionContainer
