import {FormattedMessage, useIntl} from "react-intl"

import NextSeo from "../components/NextSeo"
import AppLoader from "../components/AppLoader"

const IndexPage = () => {
    const intl = useIntl()

    const seoTitle = intl.formatMessage({id: "page.home.head.title"})
    const seoDescription = intl.formatMessage({id: "page.home.head.meta.description"})

    return (
        <div>
            <NextSeo
                title={seoTitle}
                description={seoDescription}
            />

            <h1 className="text-center text-2xl my-10">
                <FormattedMessage id="page.home.title"/>
            </h1>
            <div className="flex items-center justify-center mt-12">
                <AppLoader/>
            </div>
        </div>
    )
}

export default IndexPage
