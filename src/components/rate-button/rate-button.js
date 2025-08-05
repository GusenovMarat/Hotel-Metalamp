export function rateButtons() {	
    document.querySelectorAll('.rate-button').forEach(rateButton => {
        const stars = rateButton.querySelectorAll('.rate-button__item');
        stars.forEach((item, index) => {
            let input = item.querySelector('.rate-button__fake');  
            input.addEventListener("change", () => {
                stars.forEach((star, starIndex) => {
                    star.querySelector('.rate-button__real').
										textContent = starIndex <= index ? 'star' : 'star_border';
                });
            });
        });
    });
}