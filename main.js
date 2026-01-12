document.addEventListener('DOMContentLoaded', () => {
    const acceptButton = document.getElementById('acceptButton');

    acceptButton.addEventListener('click', () => {
        acceptInvite();
    });
});

function acceptInvite() {
    // Use a simple browser prompt for the MVP
    const phoneNumber = prompt('To accept, please enter your phone number (e.g., 555-123-4567):');

    if (phoneNumber) {
        // In a real app, you would validate and send this to a server.
        console.log(`Phone number captured: ${phoneNumber}`);

        // --- Visual Feedback for Success ---
        const acceptButton = document.getElementById('acceptButton');
        
        // Update text and style for a clear "Success" state
        acceptButton.innerText = 'SLOT LOCKED';
        acceptButton.classList.remove('bg-yellow-400', 'hover:bg-yellow-500', 'text-slate-900');
        acceptButton.classList.add('bg-green-600', 'text-white', 'cursor-not-allowed');
        acceptButton.disabled = true;
        
        // Remove the glow effect
        acceptButton.style.boxShadow = 'none';
    }
    // If the user cancels, we do nothing.
}
