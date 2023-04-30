import Image from "next/image";
import BannerDevoCard from "./BannerDevoCard";
import Link from "next/link";

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
            <div id="todays-devo" className="absolute lg:relative flex flex-1 flex-col w-60v lg:w-auto h-fit lg:h-90v bg-white drop-shadow-lg rounded-md items-center justify-center px-7 py-10 bottom-0 lg:bottom-auto left-auto translate-x-48 lg:translate-x-0 -translate-y-10 lg:translate-y-0 z-30 lg:z-0">
                <div id="todays-devo_title" className="text-3xl font-bold text-center max-w-40v items-center justify-center lg:-mt-20 mb-1">
                    <h1>Today’s Devotional</h1>
                </div>
                <div id="todays-devo_verse" className="text-center mx-7 mt-7 mb-1">
                    <p className="text-center italic">{"Lorem ipsum, dolor sit amet consectetur adipisicing elit."}</p>
                    <p className="font-semibold"> Book 1:7 </p>
                </div>
                <div id="todays-devo_cats" className="flex flex-row text-xs items-center mt-1 mb-7">
                    <div id="cat_temp_0" className="italic text-[#131313] text-opacity-70 bg-[#89eaea] rounded-md items-center justify-center px-2 py-0.5 mx-1.5">
                        grace
                    </div>
                    <div id="cat_temp_1" className="italic text-[#131313] text-opacity-70 bg-[#89eaea] rounded-md items-center justify-center px-2 py-0.5 mx-1.5">
                        love
                    </div>
                    <div id="cat_temp_2" className="italic text-[#131313] text-opacity-70 bg-[#89eaea] rounded-md items-center justify-center px-2 py-0.5 mx-1.5">
                        repentance
                    </div>

                    {/* {categories?.map((cat) => (
                        <div key={cat._id} className="italic text-[#131313] text-opacity-70 bg-[#89eaea] rounded-md items-center justify-center px-1.5 py-0.5 mx-1.5">
                            ${cat.name}
                        </div>
                    ))} */}
                </div>
                <div id="todays-devo_blurb" className="text-sm mt-1 mx-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptatem ex quos blanditiis dolor at ipsam omnis ullam. Ducimus odit itaque dolorem sit perspiciatis nam nesciunt, distinctio rerum illo magni... Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui rem quas repudiandae nulla, totam distinctio voluptatem autem delectus sit, laboriosam rerum officiis sapiente a, vero perferendis at adipisci voluptatibus officia?
                </div>
                <div id="todays-devo_brow" className="flex flex-row items-center justify-center mt-5">
                    {/* Audio Playback */}
                    {/* <div id="todays-devo_audio" className="h-7 w-10v bg-[#eaeaea] drop-shadow-xs rounded-md" /> */}
                    <div id="todays-devo_cta" className="text-xl font-bold px-6 items-end justify-end">
                        <Link className="text-[#2f3989] text-right" href="./">🇷​​​​​🇪​​​​​🇦​​​​​🇩​​​​​ 🇲​​​​​🇴​​​​​🇷​​​​​🇪​​​​​ »</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Banner;