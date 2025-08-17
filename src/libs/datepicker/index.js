import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import './datepicker.scss';

class DatePicker {
	constructor(selector, options) {
			// this.setClasses();
			// this.findDatePicker();
			this.selector = selector;
			this.setCustomButtons("очистить", "принять")

			this.defaultProps = {
				nextHtml: 'arrow_forward',
				prevHtml: 'arrow_back',
				buttons: this.buttons,
				inline: true,
			};
			this.options = Object.assign(this.defaultProps, options)
	}

	// setClasses() {
	// 	this.DPContainer = ".js-calendar";
	// 	this.DPPlugin = ".js-date-picker";
	// }
	// `<button class="button button__theme_no-bg" type="button">
	// 							<span class="button__text">${btnText}</span>
	// 							</button>`

	setCustomButtons(...btnArray) {  
		this.buttons = btnArray.map(btnText => ({
			content: btnText,
			className: "button button__theme_no-bg",
		}));
	}

	init() {
		new AirDatepicker(this.selector, this.options)
	}
	
	// findDatePicker() {
	// 		this.DatePicker = document.querySelectorAll(this.DPContainer);
	// }

	// init() {
	// 		this.DatePicker.forEach(item => {
	// 		const plug = item.querySelector(this.DPPlugin)
	// 		new AirDatepicker(plug, this.options)
	// 	});
	// }
}

export default DatePicker;