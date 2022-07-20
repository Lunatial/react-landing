import {createContext, ReactNode, useContext, useState} from "react"

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

export function ThemeProvider({children}: ThemeProviderProps) {
    const [isPrimary, setIsPrimary] = useState<boolean>(true)

    const changeTheme = () => {
        setIsPrimary(prevState => !prevState)
    }

    return (
        <ThemeContext.Provider
            value={{
                isPrimary,
                changeTheme
            }}
        >
            <div
                className={`${isPrimary ? "themeable-primary-theme" : "themeable-secondary-theme"}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}
