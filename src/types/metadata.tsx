export interface Margins {
    ColumnCount: number;
    ColumnGutter: number;
    Top: number;
    Bottom: number;
    Left: number;
    Right: number;
    ColumnDirection: string;
    ColumnsPositions: string;
}

export interface Page {
    id: string;
    name: number;
    geometric_bound: number[];
    item_transform: number[];
    margins: Margins;
}

export interface Textframe {
    id: string;
    story: string;
    previousFrame: string;
    nextFrame: string;
    item_transform: number[];
}

export interface Metadata {
    id: string;
    pages: Page[];
    textframes: Textframe[];
}
