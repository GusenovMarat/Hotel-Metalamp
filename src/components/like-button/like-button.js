function countLikeButton() {
    const checkbox = document.querySelector('.like-button__fake');

    const countElement = checkbox.nextElementSibling.nextElementSibling;

    checkbox.addEventListener('change', function() {
        let currentCount = parseInt(countElement.textContent) || 0;
        currentCount = this.checked ? currentCount + 1 : currentCount - 1;
        countElement.textContent = currentCount;
    });
}

document.addEventListener('DOMContentLoaded', countLikeButton);