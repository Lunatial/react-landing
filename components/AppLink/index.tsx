import Link from "next/link"
import {useRouter} from 'next/router'

type AppLinkProps = {
    path: string
    displayName: string,
    locale?: string
}

const commonClasses = "text-lg text-themeable-lightGray hover:text-themeable-brightGreen hover:animate-pulse font-medium transition-all"
const activeClasses = "font-bold text-xl"
const AppLink = (props: AppLinkProps) => {
    const {path, displayName, locale} = props
    const router = useRouter()

    const activeClassName = router.asPath === path
        ? `${commonClasses} ${activeClasses}`
        : commonClasses
    return (
        <span className={activeClassName}>
        <Link href={path} locale={locale}>
            <a>
                {displayName}
            </a>
        </Link>
            </span>
    )
}

export default AppLink
