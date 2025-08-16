import DatePicker from '@/libs/datepicker';

document.addEventListener("DOMContentLoaded", () => {
		const selector = ".js-date-field";
		const options = {
			// inputClass: '.js-date-field__input',
			nextHtml: 'arrow_forward',
			prevHtml: 'arrow_back',
			navTitles: {
				days: 'MMMM yyyy'
			}
		}
		const datePicker = new DatePicker(selector, options);
		datePicker.init();
});