type FullWidthBackgroundImageProps = {
    imgUrl: string,
}
const FullWidthBackgroundImage = ({imgUrl}: FullWidthBackgroundImageProps) => {
    return <section>
        <div className="bg-cover bg-center h-140" style={{backgroundImage: `url(${imgUrl})`}}/>
    </section>
}

export default FullWidthBackgroundImage
