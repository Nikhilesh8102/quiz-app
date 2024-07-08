

const urlParams = new URLSearchParams(window.location.search);
const correct = parseInt(urlParams.get('c'), 10) || 0; // Convert score parameter to integer
const inCorrect = parseInt(urlParams.get('i'), 10) || 0; // Convert score parameter to integer
console.log(inCorrect);

// Now you can use `score` in final.html



(function showBar() {
    document.querySelector('.right-answer').style.width = `${((correct / 20) * 100).toFixed(2)}%`;
    document.querySelector('.wrong-answer').style.width = `${((inCorrect / 20) * 100).toFixed(2)}%`;
    document.querySelector('.not-attempted').style.width = `${(100 - ((correct + inCorrect) / 20) * 100).toFixed(2)}%`;

    if (correct == 0 && inCorrect == 0) {
        document.querySelector('.not-attempted').style.borderRadius = '8px';
    }
    if (correct === 0) {
        document.querySelector('.wrong-answer').style.borderRadius = 'inherit'
    }
    if (correct === 20) {
        document.querySelector('.right-answer').style.borderRadius = 'inherit'
    }
    document.querySelector('.final-score').innerText = `You scored ${correct}/20`;
    const feedback = document.querySelector('.feedback')
    if (correct <= 5) {
        feedback.innerText = 'You have a long way to go, learn and practise more!';
    }
    if (correct > 5 && correct <= 10) {
        feedback.innerText = 'You are on the right track, keep going!';
    }
    if (correct > 10 && correct <= 15) {
        feedback.innerText = ' Keep learning, you have a good score';
    }
    if (correct > 15 && correct <= 20) {
        feedback.innerText = 'Excellent, you nailed it!';
    }
})();

