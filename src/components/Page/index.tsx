import './styles.css';
import React, { useEffect, useState, useCallback } from 'react';
import { Page } from '../../types/metadata';
import { PageBorderX, Placeholder } from '../../components';

interface Props {
    index: number;
    data: Page;
    spread: {
        size: { width: number; height: number };
        pages: { size: number };
    };
}

interface State {
    drag: boolean;
    startX: number;
    startY: number;
    offsetX: number;
    offsetY: number;
}

const PageX: React.FC<Props> = (props: Props) => {
    const [state, setState] = useState<State>({
        drag: false,
        startX: 0,
        startY: 0,
        offsetX: 0,
        offsetY: 0,
    });

    const mouseDown = (e: MouseEvent) => {
        setState(_ => ({
            drag: true,
            startX: e.offsetX,
            startY: e.offsetY,
            offsetX: 0,
            offsetY: 0,
        }));
    };

    const mouseUp = () => {
        setState(state => ({
            ...state,
            drag: false,
        }));
    };

    const mouseMove = useCallback(
        (e: MouseEvent) => {
            if (state.drag) {
                setState(state => ({
                    ...state,
                    offsetX: e.offsetX - state.startX,
                    offsetY: e.offsetY - state.startY,
                }));
            }
        },
        [state.drag]
    );

    useEffect(() => {
        const page = document.getElementById(`page_${props.data.id}`);

        if (!!page) {
            page.addEventListener('mousemove', mouseMove, false);
            page.addEventListener('mousedown', mouseDown, false);
            page.addEventListener('mouseup', mouseUp, false);
        }

        return () => {
            if (!!page) {
                page.removeEventListener('mousedown', mouseDown, false);
                page.removeEventListener('mouseup', mouseUp, false);
                page.removeEventListener('mousemove', mouseMove, false);
            }
        };
    }, [props.data.id, mouseMove]);

    return (
        <div
            id={`page_${props.data.id}`}
            className={props.index === 0 ? 'pageOdd' : 'pageEven'}
            style={{
                position: 'absolute',
                width: `${props.data.geometric_bound[3]}px`,
                height: `${props.data.geometric_bound[2]}px`,
                top: `${props.spread.size.height / 2}px`,
                left: `${props.spread.size.width / 2}px`,
                transform: `matrix(${props.data.item_transform})`,
            }}
        >
            {state.drag && (
                <Placeholder
                    className="page_placeholder"
                    width={
                        // NOTE: Sets the placeholder span limit
                        props.data.geometric_bound[3] * props.spread.pages.size
                    }
                    height={props.data.geometric_bound[2]}
                    {...state}
                />
            )}

            <PageBorderX data={props.data} />
        </div>
    );
};

export default PageX;
