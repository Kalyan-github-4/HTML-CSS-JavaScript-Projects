// Create hour markers
const hourMarkersContainer = document.querySelector('.hour-markers');
for (let i = 0; i < 12; i++) {
    const marker = document.createElement('div');
    marker.className = `hour-marker ${i % 3 === 0 ? 'major' : ''}`;
    marker.style.transform = `translateX(-50%) rotate(${i * 30}deg)`;
    hourMarkersContainer.appendChild(marker);
}

const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');
const digitalTime = document.getElementById('digital-time');

function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Calculate rotation angles
    const hourRotation = (hours * 30) + (minutes * 0.5);
    const minuteRotation = minutes * 6;
    const secondRotation = seconds * 6;

    // Apply rotations
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;

    // Update digital time
    const timeString = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    digitalTime.textContent = timeString;
}

// Initialize and update every second
updateClock();
setInterval(updateClock, 1000);