import {createContext, ReactNode, useContext, useState, memo} from "react"

type ThemeProviderProps = {
    children: ReactNode
}

type ThemeContext = {
    isPrimary: boolean
    changeTheme: () => void
}

const ThemeContext = createContext({} as ThemeContext)

export function useTheme() {
    return useContext(ThemeContext)
}

const ThemeProvider = ({children}: ThemeProviderProps) => {
    const [isPrimary, setIsPrimary] = useState<boolean>(true)

    const changeTheme = () => {
        setIsPrimary(prevState => !prevState)
    }
    console.log('ThemeProvider rerender')
    return (
        <ThemeContext.Provider
            value={{
                isPrimary,
                changeTheme
            }}
        >
            <div
                className={isPrimary ? "themeable-primary-theme" : "themeable-secondary-theme"}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export {ThemeProvider}
