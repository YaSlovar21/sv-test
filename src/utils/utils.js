export function formatCommentText(rawData) {
    const formatted = rawData
        .replace(/&#x2F;/g, '/')
        .replace(/<p>/g, '\n')
        .replace(/&#x27;/g, '\'')
        .replace(/&quot;/g, '"')
        .replace(/&gt;/g, '>')
        .replace(/&lt;/g, '>')
    return formatted;
}

export const cardsInLineByWidth = (screenWidth) => {
    if (screenWidth < 480) return 2; //mobile
    if (screenWidth < 641) return 3; //laptop
    if (screenWidth < 731) return 2; //llaptop
    if (screenWidth < 931) return 3; //xllaptop
    if (screenWidth < 1025) return 4; //olpc
    return 5;
}