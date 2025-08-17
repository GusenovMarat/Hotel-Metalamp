import DatePicker from '@/libs/datepicker';

document.addEventListener("DOMContentLoaded", () => {
		const selector = ".js-date-field__input";
		const options = {
			navTitles: {
				days: 'MMMM yyyy'
			}
		}
		const datePicker = new DatePicker(selector, options);
		datePicker.init()
});