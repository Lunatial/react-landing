type ColoredTextProps = {
    color: 'text-themeable-blue' | 'text-themeable-green' | 'text-themeable-yellow' | 'text-themeable-lightGray' | 'text-themeable-orange'
    children: string
}

const ColoredText = ({color, children}: ColoredTextProps) => {
    return (
        <span className={color}>
            {children}
        </span>
    )
}

export default ColoredText
