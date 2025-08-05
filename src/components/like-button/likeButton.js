export function countLikeButtons() {
  document.querySelectorAll('.like-button').forEach(likeButton => {
    const checkbox = likeButton.querySelector('.like-button__fake');
    const counter = likeButton.querySelector('.like-button__count');
    
    checkbox.addEventListener('change', () => {
      let count = +counter.textContent || 0;
      counter.textContent = checkbox.checked ? count + 1 : count - 1;
    });
  });
}