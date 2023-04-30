// 'use client';

// import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiFillHeart, AiOutlineMenu, AiOutlineMenuFold, AiOutlineSearch } from "react-icons/ai";
import { useRef } from "react";

function Header() {
    // const [fromTop, setFromTop] = useState(0);
    // const viewportRef = useRef(document.getElementById("site_header"));

    // const handleVWFromTop = () => {
    //     // const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    //     const fromTop = window.scrollY + viewportRef.current.offsetTop;
    //     // const position = window.scrollY;
    //     console.log(`👀: ${fromTop}`);
    //     setFromTop(fromTop);
    //     console.log(`🎯: ${fromTop}`);
    //   };
      
    //   useEffect(() => {
    //     window.addEventListener('resize', handleVWFromTop, {passive: true});
    //     return () => {
    //       window.removeEventListener('resize', handleVWFromTop);
    //     }
    //   }, [vi]);

    // const headerOrFooter = () => {
    //     if (window.scrollY + viewportRef.current.getBoundingClientRect() == 0) {
    //         return '';
    //     }
    //     return 'lg:rounded-xl';
    // };

    return (
        <header id="site_header" className={`fixed left-0 top-0 flex justify-between w-full font-sans text-white bg-gradient-to-b from-indigo-700 backdrop-blur-2xl border-blue-300 px-8 border-b pt-8 pb-6   dark:bg-indigo-900/50 dark:from-inherit dark:border-b-blue-700/30   lg:static lg:w-auto lg:border lg:rounded-xl lg:bg-indigo-300 lg:p-4   lg:dark:bg-indigo-700/30 z-50`}>
            <div id="nav_left" className="flex items-center space-x-2">
                <Link id="nav_left_logo" href="/#">
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Rccg_logo.png"
                        alt="logo"
                        width={44}
                        height={44}
                        className="rounded-full"
                    />
                </Link>
            </div>
            <div id="nav_rt" className="flex items-center justify-between">
                <div id="nav_rt_links" className="flex font-medium text-sm mx-2.5 items-center justify-between md:text-base">
                    <Link href="/#" className="mx-4 hidden md:inline-flex">Listen</Link>
                    <Link href="/#" className="flex text-[#2f3192] bg-[#89eaea] px-3 py-1.5 rounded-md mx-2 items-center justify-center">
                        <AiFillHeart className="mr-1" />
                        Donate
                    </Link>
                    {/* <Link href="/#" className="flex items-center justify-center mx-2.5">
                        <AiOutlineSearch className="mr-2" />
                        Search
                    </Link> */}
                </div>
                <div id="nav_right_menu">
                    <AiOutlineMenu
                        size={30}
                        className="ml-2 cursor-pointer md:ml-4"
                    />
                </div>
            </div>
        </header>
    )
};

export default Header;