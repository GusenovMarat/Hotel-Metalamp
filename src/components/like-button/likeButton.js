export function countLikeButtons() {
  document.querySelectorAll('.js-like-button').forEach((likeButton) => {
    const Active = {
      button: 'like-button-active',
      icon: 'like-button__icon-active',
      count: 'like-button__count-active'
    }
    const icon = likeButton.querySelector('.js-like-button__icon');
    const counter = likeButton.querySelector('.js-like-button__count');
    
    likeButton.addEventListener('click', () => {
      let count = parseInt(counter.textContent) || 0;
      const isActive = likeButton.classList.contains(Active.button);

      likeButton.classList.toggle(Active.button)
      icon.classList.toggle(Active.icon);
      counter.classList.toggle(Active.count);

      counter.textContent = isActive ? 
      Math.max(0, count - 1) 
      : count + 1;
    });
  });
}