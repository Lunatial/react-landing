import NextSeo from "../components/NextSeo"
import {DnDContainer} from "../components/DnDSingleTarget/Container"

const SingleDnd = () => {
    return (
        <div>
            <NextSeo
                title="React-landing"
                description={`React-landing-description`}
            />

            <h1 className="text-center">DnDExamplePage</h1>
            <DnDContainer/>
        </div>
    )
}

export default SingleDnd
