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

    setTimeout(() => {
        counter += 0.0000001;
        const remainingPercentage = percentage - counter;
        resultDiv.innerHTML = `${remainingPercentage.toFixed(7)}%`;
      }, 0);
      
      setInterval(() => {
        counter += 0.0000001;
        const remainingPercentage = percentage - counter;
        resultDiv.innerHTML = `${remainingPercentage.toFixed(7)}%`;
      }, 2284); // Update every 2284ms
      

        setTimeout(() => {
         document.getElementById("hidden-element").style.display = "block"; /* show the element after 5 seconds */
        }, 5000); // 5000 milliseconds = 5 seconds
});