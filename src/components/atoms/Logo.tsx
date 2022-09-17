import React, {useState} from 'react';
import logo from "../../../public/logo-lower.png"
import altLogo from "../../../public/logo-caps.png"
import Image from "next/image";


function Logo() {
    const [isHovering, setIsHovered] = useState(false);

    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return <>
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={"hover: cursor-pointer"}>
            <a href={"#"}>
                {
                    isHovering ?
                        <Image src={altLogo} alt={"Logo hover"} layout={"fixed"} width={"50px"} height={"50px"}/> :
                        <Image src={logo} alt={"Logo"} layout={"fixed"} width={"50px"} height={"50px"}/>
                }
            </a>

        </div>
    </>
}

export default Logo;