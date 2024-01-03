const faqs = document.querySelectorAll('section');

// Toggle answer visibility

function toggleAnswer(event) {
    // Toggle clicked item visibility
    const clickedQuestion = event.target.closest('section');
    clickedQuestion.firstElementChild.nextElementSibling.style.display = 'block';
    // Toggle icon
    clickedQuestion.firstElementChild.lastElementChild.src = "./assets/images/icon-minus.svg";

    // Toggle not clicked item visibility
    faqs.forEach(function (element) {
        const item = element;
        if (item !== clickedQuestion) {
            item.firstElementChild.nextElementSibling.style.display = 'none';
            // Toggle icon
            item.firstElementChild.lastElementChild.src = "./assets/images/icon-plus.svg";
        }
    })
}

// Listen for click events

faqs.forEach(function (element) {
    element.addEventListener('click', toggleAnswer);
});