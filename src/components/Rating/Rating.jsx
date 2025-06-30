
function Rating({number}) {
    if (number && number<=5) {
        return (
            `${'★'.repeat(number)}${'☆'.repeat(5-number)}`
        );
    } else {
        return (
            `${number}★`
        )
    }
}

export default Rating;