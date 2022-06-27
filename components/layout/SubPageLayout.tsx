import {ReactNode} from "react";
import Image from "next/image";

type SubPageLayoutType = {
    imgUrl: string,
    children: ReactNode;
}

const SubPageLayout = ({imgUrl, children}: SubPageLayoutType) => {
    return (
        <div className="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
            <div className="h-full bg-white rounded overflow-hidden shadow-lg">
                <div className='prose mx-auto md:my-8 p-1 antialiased'>

                    <div className="relative h-100">
                        <Image
                            layout="responsive"
                            height="253"
                            width={"660"}
                            objectFit="cover"
                            alt="about me background image"
                            src={imgUrl}
                            loading="eager"
                        />
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default SubPageLayout;
