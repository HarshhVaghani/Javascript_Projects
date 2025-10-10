{
    const cardData = {
        teacher: { title: "Happy Diwali Teacher ✨", message: "Dear Teacher, your guidance lights our path like diyas in the night. Wishing you a bright and prosperous Diwali!" },
        friends: { title: "Happy Diwali Friends 🎉", message: "To my amazing friends, may this Diwali bring endless joy, laughter, and unforgettable memories!" },
        family: { title: "Happy Diwali Family 🪔", message: "To my dearest family, you are the true light of my life. Wishing you love, happiness, and prosperity this Diwali!" }
    };

    function showCard(type) {
        const cardContainer = document.getElementById('cardContainer');
        document.getElementById('cardTitle').innerText = cardData[type].title;
        document.getElementById('cardMessage').innerText = cardData[type].message;
        cardContainer.classList.remove('hidden');
        cardContainer.classList.add('flex');
        launchConfetti();
    }

    function closeCard() {
        const cardContainer = document.getElementById('cardContainer');
        cardContainer.classList.add('hidden');
        cardContainer.classList.remove('flex');
    }

    // Fireworks Effect
    setInterval(() => {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.top = Math.random() * window.innerHeight + 'px';
        firework.style.left = Math.random() * window.innerWidth + 'px';
        document.body.appendChild(firework);
        setTimeout(() => firework.remove(), 1000);
    }, 500);

    // Confetti Effect
    function launchConfetti() {
        for (let i = 0; i < 30; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('firework');
            confetti.style.top = window.innerHeight / 2 + 'px';
            confetti.style.left = window.innerWidth / 2 + 'px';
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 800);
        }
    }

    // Music Toggle
    const music = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');
    let playing = false;

    musicToggle.addEventListener('click', () => {
        if (!playing) {
            music.play();
            musicToggle.innerText = 'Pause Music';
        } else {
            music.pause();
            musicToggle.innerText = 'Play Music';
        }
        playing = !playing;
    });
}