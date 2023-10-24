
export function formatSize(size){
    if (typeof size === 'number') {
        return `${size}px`;
    } else if (!/[\d\s]px|%|em|rem|vh|vw|vmin|vmax|cm|mm|in|pt|pc|ex|ch|cap|ic|lh|rlh$/i.test(size)) {
        return `${size}px`;
    }
    return size;
}