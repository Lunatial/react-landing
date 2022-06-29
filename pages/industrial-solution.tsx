import NextSeo from "../components/NextSeo"
import {IndustrialSolutionContainer} from "../components/IndustrialSolution"


const IndustrialSolution = () => {
    return (
        <div>
            <NextSeo
                title="React-landing"
                description={`React-landing-description`}
            />

            <h1 className="text-center">Ipari megoldások</h1>
            <IndustrialSolutionContainer/>
        </div>
    )
}

export default IndustrialSolution
