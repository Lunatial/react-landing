import Image from 'next/image'
import Link from "next/link"
import {FormattedMessage} from "react-intl"

// @ts-ignore
import rightArrow from '../../public/images/rightArrow.png?webp'

const ContactUs = () => {
    return (
        <div className="flex flex-col items-center">
            <Link href="#contactForm">
                <div
                    className={`w-16 h-16 flex items-center justify-center rounded-full select-none cursor-pointer hover:rotate-90 ease-in duration-500 bg-themeable-brightGreen`}>
                    <Image
                        src={rightArrow}
                        layout='fixed'
                        width={30}
                        height={30}
                        alt="Right Arrow"
                    />

                </div>
            </Link>

            <p className="uppercase mt-4 text-themeable-lightGray">
                <FormattedMessage id="page.home.contactUs"/>
            </p>
        </div>
    )
}

export default ContactUs
