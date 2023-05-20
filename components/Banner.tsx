'use client';

import { CSSProperties } from "react";
import Image from "next/image";
import BannerDevoCard from "./BannerDevoCard";
import Link from "next/link";
import { AiFillPlayCircle, AiOutlineArrowDown, AiOutlineCaretDown, AiOutlinePlayCircle, AiTwotonePlayCircle } from "react-icons/ai";
import { ArrowDownRightIcon } from "@iconicicons/react";
import Collapsible from "./Collapsible";

function Banner(this: any) {
    
    function isClickedExpand() {
        if (false) {
            return true;
        };
        
        return false;
    };

    return (
        <section id="todays-devo" className="flex flex-1 flex-col max-w-full min-h-90v bg-white items-start overflow-x-clip px-7 rounded-md drop-shadow-lg z-30   lg:flex-row lg:w-auto lg:min-h-fit lg:pt-14 lg:z-0">
            <div id="todays-devo_text" className="max-w-full pt-28 pb-2 mx-2   lg:max-w-60v lg:mx-8">
                <div id="todays-devo_title" className="text-6xl font-light tracking-tighter leading-tighter text-left justify-center -mx-2 mt-8 mb-5 transition-colors duration-500 ease-in   hover:text-[#2f3192] cursor-pointer   md:mt-4 md:text-9xl   lg:text-[12rem] lg:font-light lg:line-clamp-2 lg:-mt-12 lg:mb-2">
                    <h1>Criteria for Promotion II</h1>
                </div>
                <div id="todays-devo_verse" className="max-w-full text-sm font-medium mb-4   lg:max-w-60v lg:text-base">
                    <span className="italic font-light">{"Humble yourselves therefore under the mighty hand of God, that he may exalt you in due time:  "}&nbsp;&nbsp;&nbsp;</span>
                    <span className="text-sm font-medium -ml-3"> 1 Peter 5:6 </span>
                </div>
                <span id="todays-devo_blurb" className="max-w-100v text-black text-sm font-extralight line-clamp-3 leading-6 mt-1">{"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem nihil beatae vel quidem. Eveniet, nam vero accusamus repudiandae quaerat eos beatae molestiae illo dolor error sint dicta temporibus ex sapiente. "}&nbsp;</span>
                <span id="todays-devo_cta" className="inline-flex justify-center text-center text-base font-semibold   lg:mt-4">
                    <Link className="text-[#2f3989] text-left break-normal mt-1   md:text-2xl md:mt-4   lg:text-3xl" href="./">{"READ MORE"}<ArrowDownRightIcon className="inline-flex -mt-1 w-10 h-10" /></Link>
                </span>
                <div id="todays-devo_cats" className="flex flex-row overflow-x-auto max-w-full text-xs my-3 -ml-2   lg:inline-grid lg:grid-flow-col lg:grid-rows-2 lg:gap-x-2 lg:gap-y-3 lg:place-items-center lg:max-w-20v">
                    <div id="cat_temp_0" className="w-fit italic text-[#131313]/70 bg-[#89eaea] items-center text-center justify-center align-middle rounded-md px-2 py-0.5 mx-1.5 my-2 duration-500 ease-in-out hover:bg-[#2f3192] hover:text-white">
                        grace
                    </div>
                    <div id="cat_temp_1" className="w-fit italic text-[#131313]/70 bg-[#89eaea] items-center text-center justify-center rounded-md px-2 py-0.5 mx-1.5 my-2 duration-500 ease-in-out hover:bg-[#2f3192] hover:text-white">
                        love
                    </div>
                    <div id="cat_temp_2" className="w-fit italic text-[#131313]/70 bg-[#89eaea] items-center text-center justify-center rounded-md px-2 py-0.5 mx-1.5 my-2 duration-500 ease-in-out hover:bg-[#2f3192] hover:text-white">
                        repentance
                    </div>
                    <div id="cat_temp_3" className="w-fit italic text-[#131313]/70 bg-[#89eaea] items-center text-center justify-center rounded-md px-2 py-0.5 mx-1.5 my-2 duration-500 ease-in-out hover:bg-[#2f3192] hover:text-white">
                        obedience
                    </div>
                    <div id="cat_temp_4" className="w-fit italic text-[#131313]/70 bg-[#89eaea] items-center text-center justify-center rounded-md px-2 py-0.5 mx-1.5 my-2 duration-500 ease-in-out hover:bg-[#2f3192] hover:text-white">
                        goodworks
                    </div>
                    <div id="cat_temp_5" className="w-fit italic text-[#131313]/70 bg-[#89eaea] items-center text-center justify-center rounded-md px-2 py-0.5 mx-1.5 my-2 duration-500 ease-in-out hover:bg-[#2f3192] hover:text-white">
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
            <div id="todays-devo_active" className="flex flex-col max-w-full items-center justify-start mt-2   lg:max-w-40v lg:min-h-fit lg:mt-0">
                <div id="todays-devo_audio" className="flex flex-row items-center justify-center text-center align-middle bg-gradient-to-r from-[#2f3192] from-5% to-[#779aea] to-95% w-fit bg-clip-text border-4 border-[#131313]/70 px-5 py-4 rounded-xl mb-10 cursor-pointer   md:absolute md:items-start md:justify-start md:left-8 md:bg-clip-border md:border-none md:rounded-2xl   lg:left-14 lg:bottom-0">
                    {/* <AiOutlinePlayCircle size={50} className={`hidden bg-gradient-to-r from-[#2f3192] from-5% to-[#779aea] to-95% text-white rounded-full  lg:inline-block lg:mx-3 lg:my-2`} /> **/}
                    <p className="flex flex-row items-center justify-center text-center align-middle h-full text-transparent text-xl font-extrabold   md:text-white md:font-normal   lg:px-2 lg:py-3">
                        {"Hear the audio"} &nbsp;
                        <AiFillPlayCircle size={18} className=" w-auto h-auto mt-[0.125em] hidden   md:flex   lg:w-7 lg:h-7" />
                    </p>
                </div>
                <Collapsible id="todays-devo_links" label="Related Devotions" className="relative flex flex-col w-100v py-5 mx-2   lg:w-auto lg:min-h-90v lg:max-h-100v lg:overflow-y-scroll lg:items-start lg:bg-white lg:pt-32 lg:-mt-40">
                    <div id="todays-devo_links_cards"className="flex flex-row gap-[2.5rem] overflow-auto w-full min-h-30v px-10 py-4 my-3   sm:flex-row   lg:flex-col lg:w-full lg:pt-8 lg:pb-10 lg:-mt-12 lg:hover:min-h-[16vh]">
                        <div id="todays-devo_links_card_1" className="relative flex flex-col min-w-[16rem] min-h-40v rounded-xl justify-between overflow-hidden pt-48 px-3   md:min-w-30   lg:max-w-30v lg:min-h-10v lg:blur-none lg:hover:min-h-[16vh] lg:hover:bg-black/20 lg:border-transparent lg:px-5 lg:pt-4 lg:pb-2 lg:border-2 lg:hover:border-blue-500 lg:hover:border-opacity-70 duration-500 ease-in-out">
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
                            <Link href={""} className="text-[#2f3989] font-semibold mb-10 z-10">{"🇷​​​​​🇪​​​​​🇦​​​​​🇩​​​​​ 🇲​​​​​🇴​​​​​🇷​​​​​🇪​​​​​ "}<ArrowDownRightIcon className="inline-flex -ml-1 -mt-[0.06125] w-4 h-4" /></Link>
                            {/* <div className="flex w-fit bg-gradient-to-r from-[#2f3192] from-5% to-[#779aea] to-95% rounded-full cursor-pointer z-10">
                                <AiOutlinePlayCircle size={30} className=" font-semibold text-white text-opacity-40 bg-clip-text rounded-full z-10" />
                            </div> */}
                        </div>
                        <div id="todays-devo_links_card_2" className="relative flex flex-col min-w-[16rem] min-h-40v rounded-xl justify-between overflow-hidden pt-48 px-3   md:min-w-30   lg:max-w-30v lg:min-h-10v lg:blur-none lg:hover:min-h-[16vh] lg:hover:bg-black/20 lg:border-transparent lg:px-5 lg:pt-4 lg:pb-2 lg:border-2 lg:hover:border-blue-500 lg:hover:border-opacity-70 duration-500 ease-in-out">
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
                            <Link href={""} className="text-[#2f3989] font-semibold mb-10 z-10">{"🇷​​​​​🇪​​​​​🇦​​​​​🇩​​​​​ 🇲​​​​​🇴​​​​​🇷​​​​​🇪​​​​​ "}<ArrowDownRightIcon className="inline-flex -ml-1 -mt-[0.06125] w-4 h-4" /></Link>
                            {/* <div className="flex w-fit bg-gradient-to-r from-[#2f3192] from-5% to-[#779aea] to-95% rounded-full cursor-pointer z-10">
                                <AiOutlinePlayCircle size={30} className=" font-semibold text-white text-opacity-40 bg-clip-text rounded-full z-10" />
                            </div> */}
                        </div>
                        <div id="todays-devo_links_card_3" className="relative flex flex-col min-w-[16rem] min-h-40v rounded-xl justify-between overflow-hidden pt-48 px-3   md:min-w-30   lg:max-w-30v lg:min-h-10v lg:blur-none lg:hover:min-h-[16vh] lg:hover:bg-black/20 lg:border-transparent lg:px-5 lg:pt-4 lg:pb-2 lg:border-2 lg:hover:border-blue-500 lg:hover:border-opacity-70 duration-500 ease-in-out">
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
                            <Link href={""} className="text-[#2f3989] font-semibold mb-10 z-10">{"🇷​​​​​🇪​​​​​🇦​​​​​🇩​​​​​ 🇲​​​​​🇴​​​​​🇷​​​​​🇪​​​​​ "}<ArrowDownRightIcon className="inline-flex -ml-1 -mt-[0.06125] w-4 h-4" /></Link>
                            {/* <div className="flex w-fit bg-gradient-to-r from-[#2f3192] from-5% to-[#779aea] to-95% rounded-full cursor-pointer z-10">
                                <AiOutlinePlayCircle size={30} className=" font-semibold text-white text-opacity-40 bg-clip-text rounded-full z-10" />
                            </div> */}
                        </div>
                        <div id="todays-devo_links_card_4" className="relative flex flex-col min-w-[16rem] min-h-40v rounded-xl justify-between overflow-hidden pt-48 px-3   md:min-w-30   lg:max-w-30v lg:min-h-10v lg:blur-none lg:hover:min-h-[16vh] lg:hover:bg-black/20 lg:border-transparent lg:px-5 lg:pt-4 lg:pb-2 lg:border-2 lg:hover:border-blue-500 lg:hover:border-opacity-70 duration-500 ease-in-out">
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
                            <Link href={""} className="text-[#2f3989] font-semibold mb-10 z-10">{"🇷​​​​​🇪​​​​​🇦​​​​​🇩​​​​​ 🇲​​​​​🇴​​​​​🇷​​​​​🇪​​​​​ "}<ArrowDownRightIcon className="inline-flex -ml-1 -mt-[0.06125] w-4 h-4" /></Link>
                            {/* <div className="flex w-fit bg-gradient-to-r from-[#2f3192] from-5% to-[#779aea] to-95% rounded-full cursor-pointer z-10">
                                <AiOutlinePlayCircle size={30} className=" font-semibold text-white text-opacity-40 bg-clip-text rounded-full z-10" />
                            </div> */}
                        </div>
                        <div id="todays-devo_links_card_5" className="relative flex flex-col min-w-[16rem] min-h-40v rounded-xl justify-between overflow-hidden pt-48 px-3   md:min-w-30   lg:max-w-30v lg:min-h-10v lg:blur-none lg:hover:min-h-[16vh] lg:hover:bg-black/20 lg:border-transparent lg:px-5 lg:pt-4 lg:pb-2 lg:border-2 lg:hover:border-blue-500 lg:hover:border-opacity-70 duration-500 ease-in-out">
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
                            <Link href={""} className="text-[#2f3989] font-semibold mb-10 z-10">{"🇷​​​​​🇪​​​​​🇦​​​​​🇩​​​​​ 🇲​​​​​🇴​​​​​🇷​​​​​🇪​​​​​ "}<ArrowDownRightIcon className="inline-flex -ml-1 -mt-[0.06125] w-4 h-4" /></Link>
                            {/* <div className="flex w-fit bg-gradient-to-r from-[#2f3192] from-5% to-[#779aea] to-95% rounded-full cursor-pointer z-10">
                                <AiOutlinePlayCircle size={30} className=" font-semibold text-white text-opacity-40 bg-clip-text rounded-full z-10" />
                            </div> */}
                        </div>
                    </div>
                </Collapsible>
            </div>
        </section>
    );
};

export default Banner;