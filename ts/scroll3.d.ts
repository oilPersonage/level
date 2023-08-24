export declare enum TDirection {
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical"
}
export type TScrollItemData = {
    elem: HTMLDivElement;
    start: number;
    speed: number;
    end: number;
    top: number;
    bottom: number;
    height: number;
    opacity: boolean;
    helper: boolean;
    endToEnd: boolean;
    alternative: boolean;
    direction: TDirection;
};
