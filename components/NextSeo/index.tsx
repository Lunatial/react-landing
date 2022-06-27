import {NextSeo} from "next-seo"

type NextSeoComponentProps = {
    title?: string,
    description?: string,
}

const NextSeoComponent = (props: NextSeoComponentProps) => {
    const {title = "Lenoa Title", description = "Lenoa description"} = props

    //TODO rendesen beállítani
    return <NextSeo
        title={title}
        description={description}
        canonical={"https://test-lenoa.netlify.app/"}
        openGraph={{
            url: '/',
            title: title,
            description: description,
            images: [
                {
                    url: 'https://www.example.ie/og-image-01.jpg?webp',
                    width: 800,
                    height: 600,
                    alt: 'Og Image Alt',
                    type: 'image/jpeg',
                },
                {
                    url: 'https://www.example.ie/og-image-02.jpg?webp',
                    width: 900,
                    height: 800,
                    alt: 'Og Image Alt Second',
                    type: 'image/jpeg',
                },
                {url: 'https://www.example.ie/og-image-03.jpg?webp'},
                {url: 'https://www.example.ie/og-image-04.jpg?webp'},
            ],
            site_name: title,
        }}
        twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
        }}
        additionalLinkTags={[
            {
                rel: 'icon',
                href: '/apple-touch-icon.png?webp',
            },
            {
                rel: 'apple-touch-icon',
                href: '/apple-touch-icon.png?webp',
                sizes: '180x180'
            },
            {
                rel: 'manifest',
                href: '/manifest.json'
            },
        ]}
    />
}

export default NextSeoComponent
