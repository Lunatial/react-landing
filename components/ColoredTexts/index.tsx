type ColoredTextProps = {
    color: 'blue' | 'green' | 'yellow' | 'lightGray' | 'orange'
    children: string
}

const ColoredText = ({color, children}: ColoredTextProps) => {
    return (
        <span className={`themeable-override text-themeable-${color}`}>
            {children}
        </span>
    )
}

export default ColoredText
