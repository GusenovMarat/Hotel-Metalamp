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
		this.checkbox.forEach((item, index) => {
			const expand = item.querySelector(this.checkboxExpand);
			const block = item.querySelector(this.checkboxBlock);
			const toggleIcon = item.querySelector(this.checkboxToggle);
			const checkboxIndex = `js-checkbox-${index}`;

			expand.addEventListener('click', () => {
				block.classList.toggle(this.checkboxActive);	
				toggleIcon.classList.toggle(this.checkboxActiveToggle);		
				item.classList.add(checkboxIndex);	
			});

			document.addEventListener('click', (event) => {
				if (!event.target.closest(`.${checkboxIndex}`)) {
					block.classList.remove(this.checkboxActive);
					toggleIcon.classList.remove(this.checkboxActiveToggle);
				} 
			})
		});
	}
};

export default CheckboxList;
