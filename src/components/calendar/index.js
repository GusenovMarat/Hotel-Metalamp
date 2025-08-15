import DatePicker from '@/libs/datepicker';

document.addEventListener("DOMContentLoaded", () => {
		const options = {
			nextHtml: 'arrow_forward',
			prevHtml: 'arrow_back',
			navTitles: {
        days: 'MMMM yyyy'
    	}
		}
    const datePicker = new DatePicker(options);
    datePicker.init();
});