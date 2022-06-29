import Link from "next/link"
import {useRouter} from 'next/router'

type AppLinkProps = {
    path: string
    displayName: string
}

const commonClasses = "text-lg text-black font-medium hover:text-indigo-600 transition-all"
const activeClasses = "text-indigo-400"
const AppLink = (props: AppLinkProps) => {
    const {path, displayName} = props
    const router = useRouter()

    const activeClassName = router.asPath === path
        ? `${commonClasses} ${activeClasses}`
        : commonClasses
    return (
        <span className={activeClassName}>
        <Link href={path}>
            <a>
                {displayName}
            </a>
        </Link>
            </span>
    );
};

export default AppLink;
