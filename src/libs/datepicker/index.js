import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

class DatePicker {
	constructor() {
			this.setClasses();
			this.findDatePicker();
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
			new AirDatepicker(plug)
		});
	}
}

export default DatePicker;