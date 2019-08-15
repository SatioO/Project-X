import './styles.css';
import React from 'react';
import { Page } from '../../types/metadata';

interface Props {
    data: Page;
}

const PageBorderX: React.FC<Props> = (props: Props) => (
    <svg
        height={`${props.data.geometric_bound[2]}px`}
        width={`${props.data.geometric_bound[3]}px`}
        style={{ position: 'absolute' }}
    >
        <defs>
            <linearGradient
                id="e"
                x1="40"
                y1="210"
                x2="460"
                y2="210"
                gradientUnits="userSpaceOnUse"
                gradientTransform="rotate(90)"
            >
                <stop stopColor="#FF69B4" offset="0" />
                <stop stopColor="purple" offset="0.5" />
                <stop stopColor="#FF69B4" offset="1" />
            </linearGradient>
        </defs>
        <path
            d={`M${props.data.margins.Left} ${props.data.margins.Top} L${props
                .data.geometric_bound[3] - props.data.margins.Right} ${
                props.data.margins.Top
            } L${props.data.geometric_bound[3] -
                props.data.margins.Right} ${props.data.geometric_bound[2] -
                props.data.margins.Bottom} L${props.data.margins.Left} ${props
                .data.geometric_bound[2] - props.data.margins.Left} Z`}
            className="page-border"
        />
    </svg>
);

export default React.memo(PageBorderX);
