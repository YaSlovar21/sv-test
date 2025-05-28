
function FormattedDate({unixDate}) {
    const dateTime = new Date(unixDate*1000).toLocaleString()
    return (
        <span>{dateTime}</span>
    );
}

export default FormattedDate;