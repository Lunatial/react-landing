const InfoForm = () => {
    return (
        <div className="flex justify-center my-12 drop-shadow-lg">
            <div className="flex flex-col md:flex-row bg-white p-5 w-full">
                <div className="w-full h-auto lg:w-5/12 p-5">
                    <p className="text-5xl font-medium mb-6 font-VinSansPro">
                        SZERETNE TÖBB <br /> INFORMÁCIÓT KAPNI?
                    </p>
                    <p className="text-4xl font-medium font-VinSansPro">
                        TÖLTSE KI A KÉRDŐÍVET ÉS CSAPATUNK FELVESZI ÖNNEL A KAPCSOLATOT!
                    </p>
                    <hr className="border-solid border-2 rounded w-full border-black mx-auto my-5"/>
                </div>

                <div className="w-full lg:w-7/12 p-5">
                    <form>
                        <div className="flex flex-row">
                            <div className="w-1/2 pr-2">
                                <label
                                    htmlFor="name"
                                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300 uppercase">
                                    Név
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="bg-gray-100 border-none text-gray-900 text-sm focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                            <div className="w-1/2">
                                <label
                                    htmlFor="name"
                                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300 uppercase">
                                    Telefonszám
                                </label>
                                <input
                                    type="tel"
                                    id="name"
                                    className="bg-gray-100 border-none text-gray-900 text-sm focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="w-100">
                                <label
                                    htmlFor="name"
                                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300 uppercase">
                                    VÁLLALKOZÁSNEVE
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="bg-gray-100 border-none text-gray-900 text-sm focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-1/2 pr-2 flex flex-col justify-between">
                                <label
                                    htmlFor="eamil"
                                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300 uppercase">
                                    EMAIL
                                </label>
                                <input
                                    type="email"
                                    id="eamil"
                                    className="bg-gray-100 border-none text-gray-900 text-sm focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                            <div className="w-1/2">
                                <label
                                    htmlFor="name"
                                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300 uppercase">
                                    VÁROS, IRÁNYÍTÓSZÁM
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="bg-gray-100 border-none text-gray-900 text-sm focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="w-100 ">
                                <label
                                    htmlFor="name"
                                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300 uppercase">
                                    ÜZENET
                                </label>
                                <textarea
                                    rows={4}
                                    id="name"
                                    className="bg-gray-100 border-none text-gray-900 text-sm focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                        </div>
                        <button
                            className="bg-black text-white px-6 py-2 mt-5"
                            type="submit">
                            Küldés
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default InfoForm
