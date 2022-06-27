import Link from "next/link";

type AppLinkProps = {
    href: string,
    text: string,
    underline: boolean,
}

const AppLink = (props: AppLinkProps) => {
    const {href, text, underline} = props
    return (
        <Link href={href}>
            <a className={underline ? "underline" : "no-underline hover:underline"}>
                {text}
            </a>
        </Link>
    );
};

export default AppLink;
