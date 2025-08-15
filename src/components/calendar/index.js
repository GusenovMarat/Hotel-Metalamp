import DatePicker from '@/libs/datepicker';

document.addEventListener("DOMContentLoaded", () => {
		const options = {
			nextHtml: 'arrow_forward',
			prevHtml: 'arrow_forward'
		}
    const datePicker = new DatePicker(options);
    datePicker.init();
});