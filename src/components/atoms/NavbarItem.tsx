import React from 'react';

type NavbarItemProps = {
    index: number;
    label: string;
}

function NavbarItem({index, label}: NavbarItemProps) {
    return (
        <a href={`#${label.toLowerCase()}`} className={`nav-item mb-2 block font-mono text-sm text-secondary-light hover:text-primary-dark hover:cursor-pointer transition-all `}>
            <span className={"text-primary-dark pr-1"}>0{index}.</span>
            {label}
        </a>
    );
}

export default NavbarItem;