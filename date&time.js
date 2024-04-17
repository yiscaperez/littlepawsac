function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString('en-US', { hour12: true });
    document.getElementById('date-time').textContent = dateTimeString;
}

setInterval(updateDateTime, 1000);

updateDateTime();