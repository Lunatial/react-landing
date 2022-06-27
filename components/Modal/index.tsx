import AppLoader from "../AppLoader"

type GaleryModal = {
    open: boolean,
    src?: string,
    setOpen: Function
}

const GaleryModal = ({open, src, setOpen}: GaleryModal) => {

    return (
        <div className={`w-full h-full bg-gray-700 bg-opacity-80 top-0 fixed sticky-0 ${open ? "" : "hidden"}`}
             onClick={(e) => {
                 e.stopPropagation()
                 setOpen(false)
             }}>
            <div className="h-full flex justify-center items-center">
                <div
                    className="w-96 md:w-auto dark:bg-gray-600 relative flex flex-col justify-center items-center bg-white p-10 rounded-lg">
                    <div role="banner">
                        <div className="w-full rounded">
                            {
                                src
                                    ? <img
                                        className="w-140 lg:w-auto h-auto lg:h-140"
                                        src={src}
                                        alt="image"/>
                                    : <AppLoader/>
                            }
                        </div>
                    </div>
                    <button onClick={(e) => {
                        e.stopPropagation()
                        setOpen(false)
                    }}
                            className="text-gray-800 dark:text-gray-400 absolute top-2 right-2"
                            aria-label="close">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GaleryModal
