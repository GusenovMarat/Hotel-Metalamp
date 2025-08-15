import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

class DatePicker {
	constructor(options) {
			this.setClasses();
			this.findDatePicker();
			this.options = options;
	}

	setClasses() {
		this.DPContainer = ".js-calendar";
		this.DPPlugin = ".js-calendar__date-picker"
	}

	findDatePicker() {
			this.DatePicker = document.querySelectorAll(this.DPContainer);
	}

	init() {
			this.DatePicker.forEach(item => {
			const plug = item.querySelector(this.DPPlugin)
			new AirDatepicker(plug, this.options)
		});
	}
}

export default DatePicker;