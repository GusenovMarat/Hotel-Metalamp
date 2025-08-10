class DropDown {
	constructor () {
		this.setClasses();
		this.findDropDown();
	}

	setClasses() {
		this.DropDownSelector = '.js-dropdown';
    this.DropDownBlock = '.js-dropdown__block';
    this.DropDownCurrent = '.js-dropdown__current';
    this.DropDownCurrentText = '.js-dropdown__current-text';
    this.DropDownToggle = '.js-dropdown__toggle';
    this.DropDownList = '.js-dropdown__list';
		this.DropDownItem = '.js-dropdown__item';
		this.DropDownButton = '.js-dropdown__button';
		this.DropDownItemCaption = '.js-dropdown__caption';
		this.DropDownCounter = '.js-dropdown__counter';
	}

	findDropDown() {
		this.DropDown = document.querySelectorAll(this.DropDownSelector);
	}

	init() {
		this.DropDown.forEach(item => {
			const list = item.querySelector(this.DropDownList);
			const block = item.querySelector(this.DropDownBlock);
			const toggle = item.querySelector(this.DropDownCurrent);
			const items = list.querySelectorAll(this.DropDownItem)
			const currentText = item.querySelector(this.DropDownCurrentText);

			toggle.addEventListener('click', () => {
				block.classList.toggle('dropdown__block-active');
			})

			items.forEach(item => {
			const buttons = item.querySelectorAll(this.DropDownButton);
			const count = item.querySelector(this.DropDownCounter);
			buttons.forEach(btn => {
					btn.addEventListener('click', () => this.handleCounter(btn, count))
					
				})
			})

			items.forEach(item => {
				const count = item.querySelector(this.DropDownCounter);
				const itemCaption = item.querySelector(this.DropDownItemCaption).textContent;
				currentText.textContent = count.textContent + itemCaption;
			})
		})
	}

	handleCounter(element, counter) {
		let value = parseInt(counter.textContent) || 0;
		const action = element.dataset.action;
		if (action === "increment") {
			value++;
		}
		if (action === "decrement") {
			value = Math.max(0, value - 1)
		}
		counter.textContent = value;
	}

}

export default DropDown