import DatePicker from '@/libs/datepicker';

document.addEventListener("DOMContentLoaded", () => {
		const options = {
			navTitles: {
        days: 'MMMM yyyy'
    	}
		}
    const datePicker = new DatePicker(options);
		datePicker.init();
});