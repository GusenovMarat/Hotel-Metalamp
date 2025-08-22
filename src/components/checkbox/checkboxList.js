class CheckboxList {
  constructor() {
    this.setSelectors();
		this.findCheckbox();
  }

	setSelectors() {
		this.checkboxSelector = '.js-checkbox';
		this.checkboxExpand = '.js-checkbox-expand';
		this.checkboxBlock = '.js-checkbox-block';
		this.checkboxToggle = '.js-checkbox-toggle';
		this.checkboxActive = 'checkbox__block-active';
		this.checkboxActiveToggle = 'checkbox__toggle-active'
	}

	findCheckbox() {
		this.checkbox = document.querySelectorAll(this.checkboxSelector);
	}

	init() {
		this.checkbox.forEach(item => {
			const expand = item.querySelector(this.checkboxExpand);
			const block = item.querySelector(this.checkboxBlock);
			const toggleIcon = item.querySelector(this.checkboxToggle);
			
			expand.addEventListener('click', () => {
					block.classList.toggle(this.checkboxActive);	
					toggleIcon.classList.toggle(this.checkboxActiveToggle);		
			});
		});
	}
};

export default CheckboxList;
