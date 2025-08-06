class CheckboxList {
  constructor() {
    this.expandCheckboxes = document.querySelectorAll('.js-checkbox__expand');
    this.init();
  }

	initStyles(element) {
		Object.assign(element.style, {
			maxHeight: '0',
			overflow: 'hidden',
			transition: 'max-height 0.3s ease',
			display: 'flex'
		})
	}

	init() {
		this.expandCheckboxes.forEach(expandCheckbox => {
			const Checkbox = expandCheckbox.nextElementSibling;
			this.initStyles(Checkbox);
		})
	}
 	
};

export default CheckboxList;
