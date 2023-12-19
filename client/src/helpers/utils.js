
function formatUTCDate(utcTimestamp, time = true) {
    const date = new Date(utcTimestamp);
    var options = {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
    };
    if (time) {

        options = {
            ...options, hour: 'numeric',
            minute: 'numeric',
            timeZoneName: 'short',
            timeZone: 'UTC'
        }
    }

    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

    return formattedDate;
}

module.exports = {
    formatUTCDate
}