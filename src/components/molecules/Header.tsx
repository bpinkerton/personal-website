import React, {useEffect, useState} from 'react';
import Logo from "../atoms/Logo";
import Button from "../atoms/Button";
import NavbarItem from "../atoms/NavbarItem";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const navItems = [
    {
        label: 'About'
    },
    {
        label: 'Experience'
    },
    {
        label: 'Skills'
    },
    {
        label: 'Contact'
    },
]

function Header() {
    const [collapsed, setCollapsed] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const {width} = useWindowDimensions();

    useEffect(() => setCollapsed(width < 768), [width])
    useEffect(() => {if(!collapsed) setMenuOpen(false)}, [collapsed])


    return <>
        <nav className={`navbar navbar-expand-lg shadow-md pr-10 relative flex items-center w-full justify-between ${width < 430 ? "w-[150%]" : "w-[100%]"}`}>
            <div className={`${menuOpen ? "absolute top-0 left-0 " : "flex items-start "} ${collapsed ? "pl-12" : "pl-[7%]"} pt-2`}>
                <Logo />
            </div>

            <div className={`${collapsed ? "hidden" : ""} flex items-end`}>
                    {
                        navItems.map((item, i) => <div key={i} className={"pr-10 pb-0.5"}><NavbarItem  index={i+1} label={item.label}/></div>)
                    }

                <ResumeButton />
            </div>


            <button
                className="absolute top-0 right-0 px-8 pt-5 border-0 py-3 md:hidden leading-none text-xl bg-transparent text-secondary-dark hover:text-primary-dark focus:text-primary-dark transition-shadow duration-150 ease-in-out mr-2"
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-controls="navbarSupportedContentY"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    className={`w-5 ${menuOpen ? "animate-pulse": ""}`}
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                >
                    <path
                        fill="currentColor"
                        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                    ></path>
                </svg>
            </button>
            <div className={`${menuOpen ? "" : "hidden"} flex flex-col items-end justify-between leading-snug min-h-[250px] pt-16 pb-3 w-[100%]`}>
                    {
                        navItems.map((item, i) => <NavbarItem key={i} index={i+1} label={item.label}/>)
                    }
                <ResumeButton />
            </div>

        </nav>
        </>
}

function ResumeButton(){
    return <a href={"../../../resume.pdf"} target={"_blank"} rel={"noreferrer"}><Button label={"Resume"} /></a>
}

export default Header;