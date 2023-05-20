import { ChevronDownIcon } from "@iconicicons/react";
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useRef, useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";

const Collapsible = (props: { className: string | undefined; id: string | undefined; label: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; children: any; }) => {
    const [open, setOpen] = useState(false);
    const contentRef = useRef(null)
    const toggle = () => setOpen(!open || window.innerWidth > 1000);

    return (
        <section id={props.id} className={props.className}>
            <h2 onClick={toggle} className={`flex flex-row justify-end w-fit text-[#131313] text-2xl font-semibold pl-5 pt-4 pb-3 rounded-xl ml-5 mb-2 cursor-pointer   md:border-4 ${open ? "md:border-[#131313]/70" : "md:border-transparent"} md:ml-[63vh] md:-mt-5   lg:fixed lg:items-start lg:justify-start lg:text-start lg:w-full lg:bg-white/90 lg:uppercase lg:text-[#131313] lg:font-bold lg:tracking-wide lg:border-transparent lg:px-2 lg:py-2 lg:ml-8 lg:mb-8 lg:z-50`}>
                {props.label}
                {/* <div className=" w-1 bg-[#89eaea] ml-1" /> */}
                <ChevronDownIcon height={40} width={40} className="-mt-1   lg:hidden" />
            </h2>
            <div ref={contentRef} style={ (open && contentRef.current) ? { height: contentRef.current.scrollHeight + "px" } : { height: "0px" }} className={`${open ? "h-[${contentRef.current.scrollHeight}px]" : "h-0   lg:h-[${contentRef.current.scrollHeight}px]"} transition-all duration-500 ease-in-out   lg:mt-16`}>
                {open &&
                    props.children
                };
            </div>
        </section>
    );
};

export default Collapsible;