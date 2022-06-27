import {useRouter} from "next/router";

const GoBackSlugSection = () => {
    const router = useRouter();
    const goBack = () => {
        router.back()
    }
    return (
        <div className="flex justify-end my-2 md:my-5 pr-4 md:pr-0">
            <button
                onClick={goBack}
                className="bg-primary hover:bg-secondary transition-all text-yellow-500 hover:text-primary py-2 px-4 rounded">
                Vissza
            </button>
        </div>
    );
};

export default GoBackSlugSection;
