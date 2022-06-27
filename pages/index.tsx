import NextSeo from "../components/NextSeo";

import Link from 'next/link'

const IndexPage = () => {
    return (
        <>
            <NextSeo
                title="React-landing"
                description={`React-landing-description`}
            />

            <h1>IndexPage</h1>
            <ul style={{display: 'flex', flexDirection: 'row', gap: '1rem'}}>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/chess">
                        <a>chess</a>
                    </Link>
                </li>
                <li>
                    <Link href="/dnd">
                        <a>dnd</a>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default IndexPage
