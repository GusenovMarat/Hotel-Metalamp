class CheckboxList {
  constructor() {
    this.setSelectors();
		this.findCheckbox();
  }

	setSelectors() {
		this.checkboxSelector = '.js-checkbox';
		this.checkboxExpand = '.js-checkbox-expand';
		this.checkboxBlock = '.js-checkbox-block';
		this.checkboxToggle = '.js-checkbox-toggle'
	}

	findCheckbox() {
		this.checkbox = document.querySelectorAll(this.checkboxSelector);
	}

	initStyles(element) {
		if (element) {
				Object.assign(element.style, {
				maxHeight: '0',
				overflow: 'hidden',
				transition: 'max-height 0.3s ease',
				display: 'flex'
			})
		}
	}

	init() {
		this.checkbox.forEach(item => {
			const block = item.querySelector(this.checkboxBlock);
			this.initStyles(block);
		})
	}
};

export default CheckboxList;
