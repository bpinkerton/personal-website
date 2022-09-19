import React from 'react';
import Link from "next/link";

type NavbarItemProps = {
    index: number;
    label: string;
}

function NavbarItem({index, label}: NavbarItemProps) {
    return (
        <Link href={`#${label.toLowerCase()}`}>
            <a className={`nav-item mb-2 block font-mono text-sm text-secondary-light hover:text-primary-dark hover:cursor-pointer transition-all `}>
                <span className={"text-primary-dark pr-1"}>0{index}.</span>
                {label}
            </a>
        </Link>

    );
}

export default NavbarItem;