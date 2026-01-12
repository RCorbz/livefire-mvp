document.addEventListener('DOMContentLoaded', () => {
    const claimButton = document.getElementById('claim-button');

    claimButton.addEventListener('mouseenter', () => {
        for (let i = 0; i < 5; i++) {
            const flame = document.createElement('div');
            flame.classList.add('flame');
            flame.style.left = `${Math.random() * 100}%`;
            flame.style.animationDelay = `${Math.random() * 0.5}s`;
            claimButton.appendChild(flame);
        }
    });

    claimButton.addEventListener('mouseleave', () => {
        const flames = claimButton.querySelectorAll('.flame');
        flames.forEach(flame => flame.remove());
    });
});