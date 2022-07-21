import {createContext, ReactNode, useContext, useState,} from "react"

type ThemeProviderProps = {
    children: ReactNode
}

type ThemeContext = {
    isPrimary: boolean
}

type ThemeDispatchContext = {
    changeTheme: () => void
}

const ThemeContext = createContext({} as ThemeContext)
const ThemeDispatchContext = createContext({} as ThemeDispatchContext)

export function useTheme() {
    return useContext(ThemeContext)
}

export function useDispatchTheme() {
    return useContext(ThemeDispatchContext)
}

const ThemeProvider = ({children}: ThemeProviderProps) => {
    const [isPrimary, setIsPrimary] = useState<boolean>(true)

    const changeTheme = () => {
        setIsPrimary(prevState => !prevState)
    }

    return (
        <ThemeDispatchContext.Provider value={{changeTheme}}>
            <ThemeContext.Provider value={{isPrimary}}>
                <div
                    className={isPrimary ? "themeable-primary-theme" : "themeable-secondary-theme"}>
                    {children}
                </div>
            </ThemeContext.Provider>
        </ThemeDispatchContext.Provider>
    )
}

export {ThemeProvider}
