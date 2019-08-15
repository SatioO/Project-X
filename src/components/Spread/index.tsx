import React, { useState } from 'react';
import { PageX } from '../../components';
import { Metadata, Page } from '../../types';

interface Props {
    data: Metadata;
}

const SPREAD_HEIGHT = 144;
const SPREAD_WIDTH = 4;

const SpreadX: React.FC<Props> = ({ data }: Props) => {
    const [spread] = useState({
        size: {
            height: Number(data.pages[0].geometric_bound[2]) + SPREAD_HEIGHT,
            width: Number(data.pages[0].geometric_bound[3]) * SPREAD_WIDTH,
        },
        pages: {
            size: data.pages.length,
        },
    });

    return (
        <div className="spread" id={data.id} style={spread.size}>
            {data.pages.map((page: Page, index: number) => (
                <PageX key={index} index={index} spread={spread} data={page} />
            ))}
        </div>
    );
};

export default SpreadX;
