class DropDown {
	constructor () {
		this.setSelectors();
		this.findDropDown();
	}

	setSelectors() {
		this.DropDownSelector = '.js-dropdown';
    this.DropDownBlock = '.js-dropdown__block';
    this.DropDownCurrent = '.js-dropdown__current';
    this.DropDownSelectItems = '.js-dropdown__current-text';
    this.DropDownToggle = '.js-dropdown__toggle';
    this.DropDownList = '.js-dropdown__list';
	}

	findDropDown() {
		this.DropDown = document.querySelectorAll(this.DropDownSelector);
	}

	init() {
		this.DropDown.forEach(item => {
			const list = item.querySelector(this.DropDownList);
			const block = item.querySelector(this.DropDownBlock);
			const toggle = item.querySelector(this.DropDownCurrent);

			toggle.addEventListener('click', () => {
				block.classList.toggle('dropdown__block-active');
			})
		})
	}



}

export default DropDown