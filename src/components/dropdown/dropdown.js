class DropDown {
	constructor() {
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
					const items = list.querySelectorAll(this.DropDownItem);
					const currentText = item.querySelector(this.DropDownCurrentText);
					const itemsData = new Map();

					toggle.addEventListener('click', () => {
							block.classList.toggle('dropdown__block-active');
					});

					items.forEach(item => {
							const buttons = item.querySelectorAll(this.DropDownButton);
							const counter = item.querySelector(this.DropDownCounter);
							const itemCaption = item.querySelector(this.DropDownItemCaption)
							buttons.forEach((btn) => {
									btn.addEventListener('click', () => {
										this.handleCounter(btn, counter);
										const key = itemCaption.textContent;
										const count = counter.textContent;

										if (count !== "0") {
												itemsData.set(key, {
														"text": key,    
														"count": count  
												});
										} else {
												itemsData.delete(key); 
										}

										currentText.textContent = (Array.from(itemsData.values()).
										map(item => item.count + " " + item.text)).
										join(", ");
									});
							});
					});
			});
	}

	handleCounter(element, counter) {
		let value = parseInt(counter.textContent) || 0;
		const action = element.dataset.action;
		if (action === "increment") {
				value++;
		}
		if (action === "decrement") {
				value = Math.max(0, value - 1);
		}
		counter.textContent = value;
	}
}

export default DropDown;