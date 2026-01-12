const claimButton = document.getElementById('claim-button');
if (claimButton) {
    claimButton.addEventListener('click', acceptInvite);
}

function acceptInvite() {
    // In a real app, this opens a modal or form.
    // For MVP, we prompt for the number to simulate the "Capture".
    const phone = prompt("To verify you are a coach, please enter your mobile number:");
    
    if (phone) {
        // Simulate success
        alert("Slot Confirmed! We will text the field map to: " + phone);
        // In reality, this is where you would save to Firebase/Database
        
        // Visual feedback update
        const button = document.getElementById('claim-button');
        if (button) {
            button.innerText = "CONFIRMED ✓";
            button.classList.remove('bg-icon');
            button.classList.add('bg-green-600');
        }
    }
}
