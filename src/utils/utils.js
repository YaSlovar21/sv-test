export function formatCommentText(rawData) {
    const formatted = rawData
        .replace(/&#x2F;/g, '/')
        .replace(/<p>/g, '\n')
        .replace(/&#x27;/g, '\'');
    
    return formatted;
}