import SectionTextLineText from "../layout/SectionTextLineText"

type IntroTextLineTextProps = {
    mainText: string,
    altText: string,
}

const IntroTextLineText = ({mainText, altText}: IntroTextLineTextProps) => {
    return (
        <SectionTextLineText>
            <p className="text-2xl md:text-3xl lg:text-5xl text-center font-medium mb-6">{mainText}</p>
            <hr className="border-solid border-2 rounded w-2/3 border-black mx-auto my-5"/>
            <p className="italic text-center leading-10 text-xl">{altText}</p>
        </SectionTextLineText>
    )
}

export default IntroTextLineText
