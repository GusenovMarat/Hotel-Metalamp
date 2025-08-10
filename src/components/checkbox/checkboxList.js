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

	init() {
		this.checkbox.forEach(item => {
			const block = item.querySelector(this.checkboxBlock);
			const expand = item.querySelector(this.checkboxExpand);
			const toggle = item.querySelector(this.checkboxToggle);

			block.style.maxHeight = '0px'
			expand.addEventListener('click', () => this.toggleHandler(block, toggle));
		});
	}

	toggleHandler (block, toggle) {
		const isHidden = block.style.maxHeight === '0px';
		block.style.maxHeight = isHidden ? `${block.scrollHeight}px` : '0px';
    toggle.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0)'
		
	}
};

export default CheckboxList;
