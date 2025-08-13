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
			
		})
	}

}

export default RangeSlider