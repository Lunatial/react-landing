import {useRouter} from "next/router"
import Link from "next/link"

const LanguageSelector = () => {
    const {locales, locale, pathname} = useRouter()

    return (
        <ul className="flex flex-row gap-4 uppercase">
            {[...locales!].sort().map((item) => (
                <li
                    key={item}
                    className={locale === item ? "text-themeable-brightGreen font-bold text-xl" : "text-themeable-lightGray font-medium text-lg hover:animate-pulse"}>
                    <Link href={pathname} locale={item} scroll={false}>
                        {item}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default LanguageSelector
