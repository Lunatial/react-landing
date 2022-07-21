import NextSeo from "../components/NextSeo"

const Blog = () => {
    return (
        <>
            <NextSeo
                title={"Blog"}
                description={"Blog"}
            />
            <section className="bg-themeable-dark h-full">
                <h1 className="text-6xl font-bold my-10 text-themeable-lightGray text-center">
                    Blog
                </h1>
                <p className="text-themeable-lightGray">
                    itt lesz majd a blog
                </p>
            </section>
        </>
    )
}

export default Blog
