const countdown = document.getElementById('countdown');

const endDate = new Date('May 5, 2024 00:00:00').getTime();

const updateCountdown = () => {
	const now = new Date().getTime();
	const distance = endDate - now;

	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);

	countdown.innerHTML = `
		<div class="countdown-item">${days}</div>
		<div class="countdown-label">Days</div>

		<div class="countdown-item">${hours}</div>
		<div class="countdown-label">Hours</div>

		<div class="countdown-item">${minutes}</div>
		<div class="countdown-label">Minutes</div>

		<div class="countdown-item">${seconds}</div>
		<div class="countdown-label">Seconds</div>
	`;

	if (distance < 0) {
		clearInterval(x);
		countdown.innerHTML = '<p>Countdown ended!</p>';
	}
};

const x = setInterval(updateCountdown, 1000);
