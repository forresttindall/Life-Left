const form = document.getElementById('life-left-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const smoker = document.getElementById('smoker').value === 'yes';
    const country = document.getElementById('country').value;

    let lifeExpectancy;
    if (gender === 'male' && smoker) {
        lifeExpectancy = 60.2;
    } else if (gender === 'male' && !smoker) {
        lifeExpectancy = 73.2;
    } else if (gender === 'female' && smoker) {
        lifeExpectancy = 66.1;
    } else if (gender === 'female' && !smoker) {
        lifeExpectancy = 79.1;
    }

    const lifeLeft = lifeExpectancy - age;
    const percentage = (lifeLeft / lifeExpectancy) * 100;
    let counter = 0;

    setInterval(() => {
        counter += 0.0001;
        const remainingPercentage = percentage - counter;
        resultDiv.innerHTML = `You have ${remainingPercentage.toFixed(4)}% of your life left.`;
    }, 2284); // Update every 2284ms
});