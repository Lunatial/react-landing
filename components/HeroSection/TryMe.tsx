import Image from 'next/image'
import {FormattedMessage} from "react-intl"

import {useDispatchTheme} from "../../contexts/ThemeProvider"

// @ts-ignore
import reactLogo from '../../public/images/reactLogo.png?webp'

const TryMe = () => {
    const {changeTheme} = useDispatchTheme()

    return (
        <div className="flex flex-col items-center">
            <div
                className={`w-16 h-16 flex items-center justify-center rounded-full select-none cursor-pointer hover:rotate-90 ease-in duration-500 bg-themeable-brightGreen`}
                onClick={changeTheme}>
                <Image
                    src={reactLogo}
                    layout='fixed'
                    width={40}
                    height={40}
                    alt="React logo - white variant"
                />
            </div>

            <p className="uppercase mt-4 text-themeable-lightGray">
                <FormattedMessage id="page.home.tryThis"/>
            </p>
        </div>
    )
}

export default TryMe
