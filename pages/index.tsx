import NextSeo from "../components/NextSeo"
import {Container} from "../components/DnDSingleTarget/Container"

const IndexPage = () => {
    return (
        <div>
            <NextSeo
                title="React-landing"
                description={`React-landing-description`}
            />

            <h1 className="text-center">DnDExamplePage</h1>
            <Container/>
        </div>
    )
}

export default IndexPage
