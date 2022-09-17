import React, {MouseEventHandler} from 'react';

type ButtonProps = {
    label: string;
    onClick: MouseEventHandler;
}

function Button({label, onClick}: ButtonProps) {
    return <button
            className="bg-transparent hover:bg-primary-light text-primary-dark font-semibold py-2 px-4 border border-primary-dark rounded transition-all"
            onClick={onClick}>
            {label}
        </button>

}

export default Button;