const wheeler = () => {
    const wheel = document.querySelector('.wheel');
    const spinButton = document.querySelector('.button');
    const displayBox = document.querySelector('.displayBox');
    
    const deg = Math.floor(5000 + Math.random() * 5000);

    let divisionSize = 90; // degree

    const divisionContent = {
        1: "Yellow dragon",
        2: "Pink dragon",
        3: "White dragon",
        4: "Red dragon"
    };


    const winHandler = (actualDegree) => {
        const winningDivisionNumber = Math.ceil(actualDegree / divisionSize);
        displayBox.innerHTML = divisionContent[winningDivisionNumber];
    }

    spinButton.addEventListener('click', () => {
        // Reset displayBox
        displayBox.innerHTML = '--';

        // Disable spin button during wheel spin
        spinButton.style.pointerEvents = 'none';

        wheel.style.transition = 'all 10s ease-out';
        wheel.style.transform =  `rotate(${deg}deg)`;

        // Add blur class 
        wheel.classList.add('blur');
    })

    wheel.addEventListener('transitionend', () => {
        // Remove blur class
        wheel.classList.remove('blur');

        spinButton.style.pointerEvents = 'auto';

        wheel.style.transition = 'none';

        const actualDegree = deg % 360;

        wheel.style.transform = `rotate(${actualDegree}deg)`;

        // Calc and display the winning divisionContent
        winHandler(actualDegree);
    })

};

wheeler();