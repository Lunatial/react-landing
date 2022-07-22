import {FormattedMessage} from "react-intl"

import ColoredText from "../ColoredTexts"
import SectionTitle from "../layout/SectionTitle"
import SectionContentText from "../layout/SectionContentText"

const SecondSection = () => {
    return (
        <section className="bg-themeable-dark px-4">
            <div className="container mx-auto">
                <SectionTitle>
                    <FormattedMessage id="page.home.secondSection.title"/>
                </SectionTitle>
                <div className="grid gap-20 grid-cols-1 md:grid-cols-2">
                    <div>
                        <SectionContentText>
                            <ColoredText color="text-themeable-blue">„Lesznek még ennél többen is?”</ColoredText>
                            – kérdezte a tusványosszűz fotós kollégánk a bálványosi szabadegyetem nulladik napján
                            a <ColoredText color="text-themeable-yellow">Tankcsapda-koncert</ColoredText> alatt, amire
                            szinte egyszerre
                            válaszoltuk, hogy igen, <ColoredText color="text-themeable-orange">Orbán
                            Viktoron</ColoredText>.
                        </SectionContentText>
                    </div>
                    <div>
                        <SectionContentText>
                            <ColoredText color="text-themeable-blue">{"{"}</ColoredText>
                            <ColoredText color="text-themeable-yellow">{"("}</ColoredText>
                            <span className="pl-8 block">
                                <ColoredText color="text-themeable-blue">„Lesznek még ennél többen is?”</ColoredText>
                                – kérdezte a tusványosszűz fotós kollégánk a bálványosi szabadegyetem nulladik napján
                                a <ColoredText color="text-themeable-yellow">Tankcsapda-koncert</ColoredText> alatt,
                                amire
                                szinte egyszerre
                                válaszoltuk, hogy igen, <ColoredText color="text-themeable-orange">Orbán
                                Viktoron</ColoredText>.
                            </span>
                            <ColoredText color="text-themeable-yellow">{")"}</ColoredText>
                            <ColoredText color="text-themeable-blue">{"},"}</ColoredText>
                        </SectionContentText>
                        <SectionContentText>
                            <ColoredText color="text-themeable-blue">{"{"}</ColoredText>
                            <ColoredText color="text-themeable-yellow">{"("}</ColoredText>
                            <span className="pl-8 block">
                                <ColoredText color="text-themeable-blue">„Lesznek még ennél többen is?”</ColoredText>
                                – kérdezte a tusványosszűz fotós kollégánk a bálványosi szabadegyetem nulladik napján
                                a <ColoredText color="text-themeable-yellow">Tankcsapda-koncert</ColoredText> alatt,
                                amire
                                szinte egyszerre
                                válaszoltuk, hogy igen, <ColoredText color="text-themeable-orange">Orbán
                                Viktoron</ColoredText>.
                            </span>
                            <ColoredText color="text-themeable-yellow">{")"}</ColoredText>
                            <ColoredText color="text-themeable-blue">{"}"}</ColoredText>
                        </SectionContentText>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecondSection
