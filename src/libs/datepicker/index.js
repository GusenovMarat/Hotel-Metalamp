import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';


// class DatePicker {
// 	constructor(options) {
// 			this.setClasses();
// 			this.findDatePicker();
// 			this.options = options;
// 	}

// 	setClasses() {
// 		this.DPContainer = ".js-calendar";
// 		this.DPPlugin = ".js-date-picker"
// 	}

// 	findDatePicker() {
// 			this.DatePicker = document.querySelectorAll(this.DPContainer);
// 	}

// 	init() {
// 			this.DatePicker.forEach(item => {
// 			const plug = item.querySelector(this.DPPlugin)
// 			new AirDatepicker(plug, this.options)
// 		});
// 	}
// }

// export default DatePicker;

class DatePicker {
	constructor(selector, options) {
			this.options = options;
			this.selector = selector;
			this.setClasses();
			this.findDatePicker();
	}

	setClasses() {
		this.DPContainer = ".js-calendar";
		this.DPPlugin = ".js-date-picker"
	}

	findDatePicker() {
		this.DatePicker = document.querySelector(this.selector);
	}

	init() {		
		const DPInput = this.DatePicker.querySelector(this.DPPlugin)
		console.log(DPInput)

		new AirDatepicker(DPInput, this.options)
	}
}

export default DatePicker;