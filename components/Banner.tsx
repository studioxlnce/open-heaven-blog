import { CSSProperties } from "react";
import Image from "next/image";
import BannerDevoCard from "./BannerDevoCard";
import Link from "next/link";
import { AiFillPlayCircle, AiOutlineArrowDown, AiOutlineCaretDown, AiOutlinePlayCircle, AiTwotonePlayCircle } from "react-icons/ai";

function Banner() {
    return (
        <div id="todays-devo" className="flex flex-1 flex-col max-w-full min-h-90v bg-white items-start overflow-x-clip px-7 rounded-md drop-shadow-lg z-30   lg:flex-row lg:w-auto lg:min-h-fit lg:pt-14 lg:z-0">
            <div id="todays-devo_text" className="max-w-full pt-28 pb-2 mx-2 lg:max-w-60v">
                <div id="todays-devo_title" className="text-7xl font-extralight tracking-tight leading-tighter text-left justify-center -indent-2 -mx-2 mb-5 transition-colors duration-500 ease-in   hover:text-[#2f3192]   md:text-9xl   lg:text-[12rem] lg:line-clamp-2 lg:mt-5 lg:mb-2">
                    <h1>Criteria for Promotion II</h1>
                </div>
                <div id="todays-devo_topic" className="grid grid-cols-2 gap-0.5 items-start -ml-2   lg:flex lg:flex-col">
                    <div id="todays-devo_verse" className="max-w-40v text-sm font-medium ml-2 mb-4   lg:max-w-60v lg:text-base">
                        <span className="italic">{"Humble yourselves therefore under the mighty hand of God, that he may exalt you in due time:  "}&nbsp;&nbsp;</span>
                        <p className="flex h-2 lg:hidden" />
                        <span className="text-sm font-semibold"> 1 Peter 5:6 </span>
                    </div>
                    <div id="todays-devo_cats" className="grid grid-cols-3 grid-flow-row-dense auto-cols-auto gap-y-0 max-w-40v text-xs mb-2   lg:start-4 lg:hidden">
                        <div id="cat_temp_0" className="w-fit italic text-[#131313]/70 bg-[#89eaea] items-center text-center justify-center rounded-md px-2 py-0.5 mx-1.5 my-2">
                            grace
                        </div>
                        <div id="cat_temp_1" className="w-fit italic text-[#131313]/70 bg-[#89eaea] items-center text-center justify-center rounded-md px-2 py-0.5 mx-1.5 my-2">
                            love
                        </div>
                        <div id="cat_temp_2" className="w-fit italic text-[#131313]/70 bg-[#89eaea] items-center text-center justify-center rounded-md px-2 py-0.5 mx-1.5 my-2">
                            repentance
                        </div>
                        <div id="cat_temp_3" className="w-fit italic text-[#131313]/70 bg-[#89eaea] items-center text-center justify-center rounded-md px-2 py-0.5 mx-1.5 my-2">
                            obedience
                        </div>
                        <div id="cat_temp_4" className="w-fit italic text-[#131313]/70 bg-[#89eaea] items-center text-center justify-center rounded-md px-2 py-0.5 mx-1.5 my-2">
                            goodworks
                        </div>
                        <div id="cat_temp_5" className="w-fit italic text-[#131313]/70 bg-[#89eaea] items-center text-center justify-center rounded-md px-2 py-0.5 mx-1.5 my-2">
                            humility
                        </div>

                        {/* ⇓ Template code to replace above hard-coding ⇓  */}
                        {/* {categories?.map((cat) => (
                            <div key={cat._id} className="italic text-[#131313]/70 bg-[#89eaea] rounded-md items-center justify-center px-1.5 py-0.5 mx-1.5">
                                ${cat.name}
                            </div>
                        ))} */}
                    </div>
                </div>
                <span id="todays-devo_blurb" className="max-w-60v text-black text-sm font-light leading-6 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptatem ex quos blanditiis dolor at ipsam omnis ullam. Ducimus odit itaque dolorem sit perspiciatis nam nesciunt, distinctio rerum illo magni... Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui rem quas repudiandae nulla, totam distinctio voluptatem autem delectus sit, laboriosam rerum officiis sapiente a, vero perferendis at adipisci voluptatibus officia...</span>
                <span id="todays-devo_cta" className="text-base font-semibold text-center justify-center">
                    <Link className="text-[#2f3989] text-left break-normal" href="./">&nbsp;&nbsp;{"🇷​​​​​🇪​​​​​🇦​​​​​🇩​​​​​ 🇲​​​​​🇴​​​​​🇷​​​​​🇪​​​​​ »"}</Link>
                </span>
            </div>
            <div id="todays-devo_active" className="flex flex-col max-w-full items-start justify-start mx-3 mt-5   lg:max-w-40v lg:min-h-fit lg:mt-0">
                {/* Audio Playback */}
                <div id="todays-devo_audio" className="flex bg-gradient-to-r from-[#2f3192] from-5% to-[#779aea] to-95% border-4 border-white rounded-xl mb-8 cursor-pointer   lg:absolute lg:rounded-full lg:z-20 lg:mt-[25%]">
                    <AiOutlinePlayCircle size={80} className="hidden bg-gradient-to-r from-[#2f3192] from-5% to-[#779aea] to-95% text-white rounded-full lg:flex" />
                    <p className="flex flex-row text-white items-center justify-center px-4 py-3   lg:hidden">
                        {"Hear the audio"} &nbsp;
                        <AiFillPlayCircle size={18} className=" mt-[0.125em]" />
                    </p>
                </div>
                <section id="todays-devo_links" className="relative flex flex-col bg-gradient-to-br from-slate-800 to-blue-200 w-100v py-3 mt-5 -left-10   lg:w-50v lg:min-h-90v lg:max-h-10v lg:overflow-y-scroll lg:items-start lg:bg-gradient-to-r lg:from-white lg:from-0% lg:via-[#2f3192] lg:via-85% lg:to-[#131313] lg:to-95% lg:pt-32 lg:-mt-16">
                    <p  className="flex flex-row w-fit text-center text-white px-6 mx-4 cursor-pointer   lg:uppercase lg:text-[#131313] lg:font-bold lg:tracking-wide lg:mb-8">
                        {"Related Devotions"} &nbsp;
                        <AiOutlineCaretDown size={18} className="mt-1   lg:hidden" />
                    </p>
                    <div id="todays-devo_links_cards"className="flex flex-row gap-[2.5rem] overflow-auto w-full min-h-30v px-10 py-4 my-3   lg:flex-col lg:w-40v lg:pt-8 lg:pb-10 lg:-mt-4">
                        <div id="todays-devo_links_card_1" className="relative flex flex-col min-w-[16rem] min-h-40v rounded-xl justify-between overflow-hidden pt-48 px-3   md:min-w-30   lg:max-w-30v lg:min-h-10v lg:blur-none lg:hover:min-h-[16vh] lg:hover:bg-black/20 lg:border-transparent lg:px-5 lg:pt-4 lg:pb-2 lg:hover:border-[3px] lg:hover:border-blue-500 lg:hover:border-opacity-70 duration-500 ease-in-out">
                            <Image
                                src={"/../public/img/homepage/genesis_inthebeginning.jpg"}
                                alt=" "
                                fill
                                style={{ objectFit: "cover" }}
                                className="fixed w-full h-full object-fill blur-sm   lg:opacity-30"
                            />
                            <div className="absolute -bottom-1 -left-1 w-[110%] h-[115%] bg-gradient-to-t from-[#f0f0f0] from-15% to-transparent to-55% blur-sm   lg:hidden lg:opacity-20 lg:hover:flex transition-all duration-500" />
                            <h3 id="todays-devo_links_card_1_title" className="text-xl font-semibold z-10   lg:text-base">In the Beginning</h3>
                            <span id="todays-devo_links_card_1_blurb" className="text-xs leading-6 line-clamp-4 z-10   lg:line-clamp-2 lg:leading-4 lg:mt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, porro. Aspernatur molestias, ut dolore facere hic iste minima unde excepturi error mollitia, eum consequatur repellat dolorem, sapiente blanditiis laboriosam iure.</span>
                            <Link href={""} className="text-[#2f3989] font-semibold mb-10 z-10">{"🇷​​​​​🇪​​​​​🇦​​​​​🇩​​​​​ 🇲​​​​​🇴​​​​​🇷​​​​​🇪​​​​​ »"}</Link>
                            {/* <div className="flex w-fit bg-gradient-to-r from-[#2f3192] from-5% to-[#779aea] to-95% rounded-full cursor-pointer z-10">
                                <AiOutlinePlayCircle size={30} className=" font-semibold text-white text-opacity-40 bg-clip-text rounded-full z-10" />
                            </div> */}
                        </div>
                        <div id="todays-devo_links_card_2" className="relative flex flex-col min-w-[16rem] min-h-40v rounded-xl justify-between overflow-hidden pt-48 px-3   md:min-w-30   lg:max-w-30v lg:min-h-10v lg:blur-none lg:hover:min-h-[16vh] lg:hover:bg-black/20 lg:border-transparent lg:px-5 lg:pt-4 lg:pb-2 lg:hover:border-[3px] lg:hover:border-blue-500 lg:hover:border-opacity-70 duration-500 ease-in-out">
                            <Image
                                src={"/../public/img/homepage/exodus_burningbush.jpg"}
                                alt=" "
                                fill
                                style={{ objectFit: "cover" }}
                                className="fixed w-full h-full object-fill blur-sm   lg:opacity-30"
                            />
                            <div className="absolute -bottom-1 -left-1 w-[110%] h-[115%] bg-gradient-to-t from-[#f0f0f0] from-15% to-transparent to-55% blur-sm   lg:hidden lg:opacity-20 lg:hover:flex transition-all duration-500" />
                            <h3 id="todays-devo_links_card_2_title" className="text-xl font-semibold z-10   lg:text-base">The God of Your Forefathers</h3>
                            <span id="todays-devo_links_card_2_blurb" className="text-xs leading-6 line-clamp-4 z-10   lg:line-clamp-2 lg:leading-4 lg:mt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, porro. Aspernatur molestias, ut dolore facere hic iste minima unde excepturi error mollitia, eum consequatur repellat dolorem, sapiente blanditiis laboriosam iure.</span>
                            <Link href={""} className="text-[#2f3989] font-semibold mb-4 z-10">{"🇷​​​​​🇪​​​​​🇦​​​​​🇩​​​​​ 🇲​​​​​🇴​​​​​🇷​​​​​🇪​​​​​ »"}</Link>
                            {/* <div className="flex w-fit bg-gradient-to-r from-[#2f3192] from-5% to-[#779aea] to-95% rounded-full cursor-pointer z-10">
                                <AiOutlinePlayCircle size={30} className=" font-semibold text-white text-opacity-40 bg-clip-text rounded-full z-10" />
                            </div> */}
                        </div>
                        <div id="todays-devo_links_card_3" className="relative flex flex-col min-w-[16rem] min-h-40v rounded-xl justify-between overflow-hidden pt-48 px-3   md:min-w-30   lg:max-w-30v lg:min-h-10v lg:blur-none lg:hover:min-h-[16vh] lg:hover:bg-black/20 lg:border-transparent lg:px-5 lg:pt-4 lg:pb-2 lg:hover:border-[3px] lg:hover:border-blue-500 lg:hover:border-opacity-70 duration-500 ease-in-out">
                            <Image
                                src={"/../public/img/homepage/levit_mtsinai.jpg"}
                                alt=" "
                                fill
                                style={{ objectFit: "cover" }}
                                className="fixed w-full h-full object-fill blur-sm   lg:opacity-30"
                            />
                            <div className="absolute -bottom-1 -left-1 w-[110%] h-[115%] bg-gradient-to-t from-[#f0f0f0] from-15% to-transparent to-55% blur-sm   lg:hidden lg:opacity-20 lg:hover:flex transition-all duration-500" />
                            <h3 id="todays-devo_links_card_3_title" className="text-xl font-semibold z-10   lg:text-base">Keep My Edicts</h3>
                            <span id="todays-devo_links_card_3_blurb" className="text-xs leading-6 line-clamp-4 z-10   lg:line-clamp-2 lg:leading-4 lg:mt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, porro. Aspernatur molestias, ut dolore facere hic iste minima unde excepturi error mollitia, eum consequatur repellat dolorem, sapiente blanditiis laboriosam iure.</span>
                            <Link href={""} className="text-[#2f3989] font-semibold mb-4 z-10">{"🇷​​​​​🇪​​​​​🇦​​​​​🇩​​​​​ 🇲​​​​​🇴​​​​​🇷​​​​​🇪​​​​​ »"}</Link>
                            {/* <div className="flex w-fit bg-gradient-to-r from-[#2f3192] from-5% to-[#779aea] to-95% rounded-full cursor-pointer z-10">
                                <AiOutlinePlayCircle size={30} className=" font-semibold text-white text-opacity-40 bg-clip-text rounded-full z-10" />
                            </div> */}
                        </div>
                        <div id="todays-devo_links_card_4" className="relative flex flex-col min-w-[16rem] min-h-40v rounded-xl justify-between overflow-hidden pt-48 px-3   md:min-w-30   lg:max-w-30v lg:min-h-10v lg:blur-none lg:hover:min-h-[16vh] lg:hover:bg-black/20 lg:border-transparent lg:px-5 lg:pt-4 lg:pb-2 lg:hover:border-[3px] lg:hover:border-blue-500 lg:hover:border-opacity-70 duration-500 ease-in-out">
                            <Image
                                src={"/../public/img/homepage/numbers_desertwandering.avif"}
                                alt=" "
                                fill
                                style={{ objectFit: "cover" }}
                                className="fixed w-full h-full object-fill blur-sm   lg:opacity-30"
                            />
                            <div className="absolute -bottom-1 -left-1 w-[110%] h-[115%] bg-gradient-to-t from-[#f0f0f0] from-15% to-transparent to-55% blur-sm   lg:hidden lg:opacity-20 lg:hover:flex transition-all duration-500" />
                            <h3 id="todays-devo_links_card_4_title" className="text-xl font-semibold z-10   lg:text-base">Mourning in the Desert</h3>
                            <span id="todays-devo_links_card_4_blurb" className="text-xs leading-6 line-clamp-4 z-10   lg:line-clamp-2 lg:leading-4 lg:mt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, porro. Aspernatur molestias, ut dolore facere hic iste minima unde excepturi error mollitia, eum consequatur repellat dolorem, sapiente blanditiis laboriosam iure.</span>
                            <Link href={""} className="text-[#2f3989] font-semibold mb-4 z-10">{"🇷​​​​​🇪​​​​​🇦​​​​​🇩​​​​​ 🇲​​​​​🇴​​​​​🇷​​​​​🇪​​​​​ »"}</Link>
                            {/* <div className="flex w-fit bg-gradient-to-r from-[#2f3192] from-5% to-[#779aea] to-95% rounded-full cursor-pointer z-10">
                                <AiOutlinePlayCircle size={30} className=" font-semibold text-white text-opacity-40 bg-clip-text rounded-full z-10" />
                            </div> */}
                        </div>
                        <div id="todays-devo_links_card_5" className="relative flex flex-col min-w-[16rem] min-h-40v rounded-xl justify-between overflow-hidden pt-48 px-3   md:min-w-30   lg:max-w-30v lg:min-h-10v lg:blur-none lg:hover:min-h-[16vh] lg:hover:bg-black/20 lg:border-transparent lg:px-5 lg:pt-4 lg:pb-2 lg:hover:border-[3px] lg:hover:border-blue-500 lg:hover:border-opacity-70 duration-500 ease-in-out">
                            <Image
                                src={"/../public/img/homepage/deut_finalwords.jpg"}
                                alt=" "
                                fill
                                style={{ objectFit: "cover" }}
                                className="fixed w-full h-full object-fill blur-sm   lg:opacity-30"
                            />
                            <div className="absolute -bottom-1 -left-1 w-[110%] h-[115%] bg-gradient-to-t from-[#f0f0f0] from-15% to-transparent to-55% blur-sm   lg:hidden lg:opacity-20 lg:hover:flex transition-all duration-500" />
                            <h3 id="todays-devo_links_card_5_title" className="text-xl font-semibold z-10   lg:text-base">Faithfulness in Blessings</h3>
                            <span id="todays-devo_links_card_5_blurb" className="text-xs leading-6 line-clamp-4 z-10   lg:line-clamp-2 lg:leading-4 lg:mt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, porro. Aspernatur molestias, ut dolore facere hic iste minima unde excepturi error mollitia, eum consequatur repellat dolorem, sapiente blanditiis laboriosam iure.</span>
                            <Link href={""} className="text-[#2f3989] font-semibold mb-4 z-10">{"🇷​​​​​🇪​​​​​🇦​​​​​🇩​​​​​ 🇲​​​​​🇴​​​​​🇷​​​​​🇪​​​​​ »"}</Link>
                            {/* <div className="flex w-fit bg-gradient-to-r from-[#2f3192] from-5% to-[#779aea] to-95% rounded-full cursor-pointer z-10">
                                <AiOutlinePlayCircle size={30} className=" font-semibold text-white text-opacity-40 bg-clip-text rounded-full z-10" />
                            </div> */}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
};

export default Banner;