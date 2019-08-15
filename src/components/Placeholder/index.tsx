import React from 'react';

interface Props {
    className: string;
    width: number;
    height: number;
    startX: number;
    startY: number;
    offsetX: number;
    offsetY: number;
}

const Placeholder: React.FC<Props> = (props: Props) => {
    return (
        <svg
            width={`${props.width}px`}
            height={`${props.height}px`}
            style={{ position: 'absolute' }}
        >
            <rect
                x={props.startX}
                y={props.startY}
                width={props.offsetX}
                height={props.offsetY}
                className={props.className}
            />
        </svg>
    );
};

export default Placeholder;
