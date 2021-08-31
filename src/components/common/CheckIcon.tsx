import React from 'react';

interface CheckIconProps {
    width?: string;
    height?: string;
    color?: string;
    handler?: () => void;
}

const CheckIcon: React.FC<CheckIconProps> = (
    { width = '20', height = '20', color, handler }
    ) => {

    return (
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={width}
        height={height}
        fill={color}
        viewBox="0 0 15 15">
            <path 
            d="M13.125 3.93l-6.977 7.957-4.273-3.762.824-.93 3.34 2.926 6.164-6.996zm0 0" 
            fillRule="evenodd"/>
        </svg>
    )
}

export default CheckIcon;