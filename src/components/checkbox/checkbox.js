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
			const expand = item.querySelector(this.checkboxExpand);
			const block = item.querySelector(this.checkboxBlock);
			const toggle = item.querySelector(this.checkboxToggle);
			this.initStyles(block);

			expand.addEventListener('click', () => this.toggleHandler(block, toggle));
		});
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
	
	toggleHandler (block, toggle) {
		const isHidden = block.style.maxHeight === '0px';
		
		block.style.maxHeight = (isHidden) ? `${block.scrollHeight}px` 
		: '0px';

		toggle.style.transition = 'transform 0.3s ease';
    toggle.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0)'
		
	}
};

export default CheckboxList;
