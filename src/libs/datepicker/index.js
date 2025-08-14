import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

class DatePicker {
	constructor() {
			this.setClasses();
			this.findDatePicker();
	}

	setClasses() {
			this.DPContainer = ".js-calendar";
			this.DPinput = ".js-calendar__input";
	}

	findDatePicker() {
			this.DatePicker = document.querySelectorAll(this.DPContainer);
	}

	init() {
		this.DatePicker.forEach(item => {
		const inp = item.querySelector(this.DPinput)
		new AirDatepicker(inp)
		});
	}
}

export default DatePicker;