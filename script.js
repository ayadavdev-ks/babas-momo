document.addEventListener('DOMContentLoaded', () => {
    checkOpenStatus();
    setInterval(checkOpenStatus, 60000); // Update every minute
});

function checkOpenStatus() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTime = currentHour + (currentMinute / 60);

    // Hours: 2:00 PM (14.00) to 8:40 PM (20.67)
    const openTime = 14.00;
    const closeTime = 20.67;

    const statusBadge = document.getElementById('status-badge');
    const statusText = statusBadge.querySelector('.status-text');

    if (currentTime >= openTime && currentTime < closeTime) {
        statusBadge.classList.add('status-open');
        statusBadge.classList.remove('status-closed');
        statusText.textContent = 'Open Now';
    } else {
        statusBadge.classList.add('status-closed');
        statusBadge.classList.remove('status-open');
        statusText.textContent = 'Closed Now (Opens 2 PM)';
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
