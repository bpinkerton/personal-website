import React from 'react';

type HeadingProps = {
    index: number;
    label: string;
}

function Heading({index, label}: HeadingProps) {
    return (
        <div className="relative flex py-5 items-center font-mono w-[300px]">
            <span className={"text-primary-dark"}>0{index}. </span>
            <span className="flex-shrink mx-4  font-bold">{label}</span>
            <div className="flex-grow border-t border-secondary-dark"></div>
        </div>
    );
}

export default Heading;