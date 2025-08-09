class DropDown {
	constructor () {
		this.setSelectors();

	}

	setSelectors() {
		this.DropDown= '.js-dropdown';
		this.DropDownSelector = '.js-dropdown__select';
		this.DropDownSelectItems = '.js-dropdown__select-items';
		this.DropDownBlock = '.js-dropdown__block';
		this.DropDownToggle = '.js-dropdown__toggle'
	}

	findDropDown() {
		this.DropDown = document.querySelectorAll(this.checkboxDropDown);
	}

	init() {
		this.DropDown.forEach(item => {
			
		})
	}

}

export default DropDown