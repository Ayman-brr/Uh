document.addEventListener('DOMContentLoaded', function () {
    const yesButton = document.getElementById('yes');
    const noButton = document.getElementById('no');
    const title = document.querySelector('.title');

  
    const messages = [
        "no is not an option",
        "try again",
        "sorry i lagged",
        "maybe try again",
        "felt like you mistakenly pressed it"
    ];


    function moveNoButton() {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;

        
        const newLeft = Math.random() * (viewportWidth - buttonWidth);
        const newTop = Math.random() * (viewportHeight - buttonHeight);

        noButton.style.position = 'absolute';
        noButton.style.left = `${newLeft}px`;
        noButton.style.top = `${newTop}px`;
    }

  
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

   
    function changeTitle() {
        title.textContent = "lmao i knew it";
    }

  
    function handleNoClick() {
       
        const message = document.createElement('div');
        message.className = 'message';
        message.textContent = messages[Math.floor(Math.random() * messages.length)];
        
       
        const rect = noButton.getBoundingClientRect();
        message.style.left = `${rect.left}px`;
        message.style.top = `${rect.top}px`;

        document.body.appendChild(message);

        
        setTimeout(() => {
            message.classList.add('fall-and-fade');
            
            message.addEventListener('transitionend', () => {
                message.remove();
            });
        }, 1000);
    }

    
    document.addEventListener('mousemove', checkDistance);
    yesButton.addEventListener('click', changeTitle);
    noButton.addEventListener('click', handleNoClick);
});
