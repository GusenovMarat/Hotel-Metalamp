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
			this.DropDownCounterButton = '.js-dropdown__counter-button';
			this.DropDownItemCaption = '.js-dropdown__caption';
			this.DropDownCounter = '.js-dropdown__counter';
			this.DropDownButtonReset = '.js-button__reset';
			this.DropDownButtonSubmit = '.js-button__submit';
			this.HideButton = 'button__hidden';
			this.DropDownBlockActive = 'dropdown__block-active'
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
					const buttonReset = item.querySelector(this.DropDownButtonReset);
					const itemsData = new Map();

					toggle.addEventListener('click', () => {
							block.classList.toggle(this.DropDownBlockActive);
					});

					items.forEach(item => {
							const buttons = item.querySelectorAll(this.DropDownCounterButton);
							const counter = item.querySelector(this.DropDownCounter);
							const itemCaption = item.querySelector(this.DropDownItemCaption)
							

							if (buttonReset) {
								buttonReset.classList.add(this.HideButton)
								buttonReset.addEventListener('click', () => {
									itemsData.clear();
									currentText.textContent = '';
									counter.textContent = '0';
									buttonReset.classList.add(this.HideButton)
								});
							};

							buttons.forEach((btn) => {
								btn.addEventListener('click', () => {
									this.handleCounter(btn, counter);
									const key = itemCaption.textContent;
									const count = counter.textContent;
									const declensions = this.declension(count, itemCaption);
									if (buttonReset) {
										buttonReset.classList.remove(this.HideButton)
									}
									itemsData.set(key, {
											"text":  declensions,    
											"count": count  
									})

									if (count === "0"){
											itemsData.delete(key); 
									}

									const groupItems = Array.from(itemsData.values())
									if (groupItems.length === 0) {
										if (buttonReset) 
											{
												buttonReset.classList.add(this.HideButton)
											}
									}

									currentText.textContent = groupItems.
									map(item => item.count + " " + item.text).
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
	declension(value, item) {
		const wordDeclensions = item.dataset.declensions;
		const words = (JSON.parse(JSON.stringify(wordDeclensions))).split(', ')
		value = value % 100; 
		const num = value % 10;
		if(value > 10 && value < 20) return words[2]; 
		if(num > 1 && num < 5) return words[1];
		if(num == 1) return words[0]; 
		return words[2];
	}
}

export default DropDown;