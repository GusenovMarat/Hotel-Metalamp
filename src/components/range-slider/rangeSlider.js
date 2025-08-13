class RangeSlider {
	constructor() {
		this.setClasses();
		this.findRangeSlider();
	}

	setClasses() {
		this.RSSelector = ".js-range-slider";
		this.RSPrice = ".js-range-slider__price";
		this.RSProgress = ".js-range-slider__progress";
		this.RSValue = ".js-range-slider__value"
	}

	findRangeSlider() {
		this.rangeSlider = document.querySelectorAll(this.RSSelector)
	}

	init() {
		this.rangeSlider.forEach(item => {
			const priceMin = item.querySelector(`${this.RSPrice}[data-limit="min"]`);
			const priceMax = item.querySelector(`${this.RSPrice}[data-limit="max"]`);
			const rangeProgress = item.querySelector(this.RSProgress);
   		const rangeValueMin = item.querySelector(`${this.RSValue}[data-value="min"]`);
   		const rangeValueMax = item.querySelector(`${this.RSValue}[data-value="max"]`);
			this.updateRange(rangeValueMin, rangeValueMax, priceMin, priceMax, rangeProgress);
		})
	}

	updateRange = (valueMin, valueMax, priceMin, priceMax, progress) => {
    const minVal = parseInt(valueMin.value);
    const maxVal = parseInt(valueMax.value);

    priceMin.textContent = minVal + "₽";
    priceMax.textContent = maxVal + "₽";

    const progressLeft = ((minVal / valueMin.max) * 100) + "%";
    const progressRight = 100 - ((maxVal / valueMax.max) * 100) + "%";
		
    progress.style.left = progressLeft;
    progress.style.right = progressRight;
   };
}

export default RangeSlider