import {useIntl} from "react-intl"

import NextSeo from "../components/NextSeo"
import HeroSection from "../components/HeroSection"

const IndexPage = () => {
    const intl = useIntl()

    const seoTitle = intl.formatMessage({id: "page.home.head.title"})
    const seoDescription = intl.formatMessage({id: "page.home.head.meta.description"})

    return (
        <>
            <NextSeo
                title={seoTitle}
                description={seoDescription}
            />
            <HeroSection/>
        </>
    )
}

export default IndexPage
