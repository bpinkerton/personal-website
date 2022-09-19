import React from 'react';

type PrimaryTextProps = {
    text: string
}

function PrimaryText({text}:PrimaryTextProps) {
    return (
        <span className={"text-primary-dark"}>
            {text}
        </span>
    );
}

export default PrimaryText;