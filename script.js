const form = document.getElementById('life-left-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const smoker = document.getElementById('smoker').value === 'yes';
    const country = document.getElementById('country').value;
    document.getElementById('life-left-form').style.display = 'none';

    


    let lifeExpectancy;
    if (country === 'US') {
        if (gender === 'male' && smoker) {
            lifeExpectancy = 60.2;
        } else if (gender === 'male' && !smoker) {
            lifeExpectancy = 73.2;
        } else if (gender === 'female' && smoker) {
            lifeExpectancy = 66.1;
        } else if (gender === 'female' && !smoker) {
            lifeExpectancy = 79.1;
        }
    } else if (country === 'Canada') {
        if (gender === 'male' && smoker) {
            lifeExpectancy = 77;
        } else if (gender === 'male' && !smoker) {
            lifeExpectancy = 81.9;
        } else if (gender === 'female' && smoker) {
            lifeExpectancy = 80;
        } else if (gender === 'female' && !smoker) {
            lifeExpectancy = 86;
        }
    } else if (country === 'Uk') {
        if (gender === 'male' && smoker) {
            lifeExpectancy = 76;
        } else if (gender === 'male' && !smoker) {
            lifeExpectancy = 80;
        } else if (gender === 'female' && smoker) {
            lifeExpectancy = 80;
        } else if (gender === 'female' && !smoker) {
            lifeExpectancy = 84;
        }
    } else if (country === 'Japan') {
        if (gender === 'male' && smoker) {
            lifeExpectancy = 78;
        } else if (gender === 'male' && !smoker) {
            lifeExpectancy = 81.6;
        } else if (gender === 'female' && smoker) {
            lifeExpectancy = 84;
        } else if (gender === 'female' && !smoker) {
            lifeExpectancy = 87.7;
        }
    } else if (country === 'China') {
        if (gender === 'male' && smoker) {
            lifeExpectancy = 73;
        } else if (gender === 'male' && !smoker) {
            lifeExpectancy = 76.5;
        } else if (gender === 'female' && smoker) {
            lifeExpectancy = 77;
        } else if (gender === 'female' && !smoker) {
            lifeExpectancy = 80.5;
        }
    } else if (country === 'India') {
        if (gender === 'male' && smoker) {
            lifeExpectancy = 66;
        } else if (gender === 'male' && !smoker) {
            lifeExpectancy = 69.5;
        } else if (gender === 'female' && smoker) {
            lifeExpectancy = 69;
        } else if (gender === 'female' && !smoker) {
            lifeExpectancy = 72.5;
        }
    } else if (country === 'Sweden') {
        if (gender === 'male' && smoker) {
            lifeExpectancy = 79;
        } else if (gender === 'male' && !smoker) {
            lifeExpectancy = 81.8;
        } else if (gender === 'female' && smoker) {
            lifeExpectancy = 81;
        } else if (gender === 'female' && !smoker) {
            lifeExpectancy = 84.7;
        }
    }

    const lifeLeft = lifeExpectancy - age;
    const percentage = (lifeLeft / lifeExpectancy) * 100;
    
    // Calculate how much percentage passes per second
    // (100% / (life expectancy in seconds))
    const percentPerSecond = 100 / (lifeExpectancy * 365 * 24 * 60 * 60);
    const startTime = Date.now();

    // Update every 100ms for smooth animation
    setInterval(() => {
        const secondsElapsed = (Date.now() - startTime) / 1000;
        const percentagePassed = percentPerSecond * secondsElapsed;
        const remainingPercentage = percentage - percentagePassed;
        resultDiv.innerHTML = `${remainingPercentage.toFixed(7)}%`;
    }, 100);

        setTimeout(() => {
         document.getElementById("hidden-element").style.display = "block"; /* show the element after 5 seconds */
        }, 5000); // 5000 milliseconds = 5 seconds
});