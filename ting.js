document.addEventListener('DOMContentLoaded', function () {
    const yesButton = document.getElementById('yes');
    const noButton = document.getElementById('no');
    const title = document.querySelector('.title');

    // Messages to display
    const messages = [
        "no is not an option",
        "try again",
        "sorry i lagged",
        "maybe try again",
        "felt like you mistakenly pressed it"
    ];

    // Function to move the "No" button to a random position
    function moveNoButton() {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;

        // Calculate random positions for the button within the viewport bounds
        const newLeft = Math.random() * (viewportWidth - buttonWidth);
        const newTop = Math.random() * (viewportHeight - buttonHeight);

        noButton.style.position = 'absolute';
        noButton.style.left = `${newLeft}px`;
        noButton.style.top = `${newTop}px`;
    }

    // Function to check the distance between the cursor and the "No" button
    function checkDistance(event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const rect = noButton.getBoundingClientRect();
        const buttonCenterX = rect.left + rect.width / 2;
        const buttonCenterY = rect.top + rect.height / 2;

        const distance = Math.sqrt(
            Math.pow(mouseX - buttonCenterX, 2) + Math.pow(mouseY - buttonCenterY, 2)
        );

        if (distance < 50) {
            moveNoButton();
        }
    }

    // Function to change the title text
    function changeTitle() {
        title.textContent = "lmao i knew it";
    }

    // Function to handle the "No" button click
    function handleNoClick() {
        // Create a new message element
        const message = document.createElement('div');
        message.className = 'message';
        message.textContent = messages[Math.floor(Math.random() * messages.length)];
        
        // Position the message at the "No" button's position
        const rect = noButton.getBoundingClientRect();
        message.style.left = `${rect.left}px`;
        message.style.top = `${rect.top}px`;

        document.body.appendChild(message);

        // Trigger the animation after 1 second
        setTimeout(() => {
            message.classList.add('fall-and-fade');
            // Remove the message from the DOM after animation completes
            message.addEventListener('transitionend', () => {
                message.remove();
            });
        }, 1000);
    }

    // Attach the event listeners
    document.addEventListener('mousemove', checkDistance);
    yesButton.addEventListener('click', changeTitle);
    noButton.addEventListener('click', handleNoClick);
});
