import Image from "next/image";
import BannerDevoCard from "./BannerDevoCardOG";

function Banner() {
    return (
        <div className="flex flex-col lg:flex-row overflow-x-hidden">
            {/* <img src="" alt="banner" className="" /> */}
            <Image
                src="/img/homepage/prayer-for-strength-1a-min.jpg"
                alt="Welcoming Banner or Today's thumbnail"
                fill
                sizes="100vw"
                className="flex lg:flex-2 h-90v object-cover overflow-x-hidden -z-50"
            />
            <BannerDevoCard />
        </div>
    )
};

export default Banner;