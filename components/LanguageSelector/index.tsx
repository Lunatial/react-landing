import {useRouter} from "next/router"
import Link from "next/link"

const LanguageSelector = () => {
    const {locales, locale, pathname} = useRouter()

    return (
        <ul className="flex flex-row gap-4 uppercase">
            {[...locales!].sort().map((item) => (
                <li key={item} className={locale === item ? "text-indigo-400" : "text-black"}>
                    <Link href={pathname} locale={item}>
                        {item}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default LanguageSelector
