import DatePicker from '@/libs/datepicker';


document.addEventListener("DOMContentLoaded", () => {
		const options = {
			dateFormat: "dd MMM"
		}
		const datePicker = new DatePicker(options);
		datePicker.init()
});