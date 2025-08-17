import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import './datepicker.scss';

class DatePicker {

	constructor(options) {
			this.findDatePicker();
			this.setCustomButtons("очистить", "применить");
			this.defaultProps = {
				nextHtml: 'arrow_forward',
				prevHtml: 'arrow_back',
				buttons: this.buttons,
				range: true,
  		  multipleDatesSeparator: ' - '
			};
			this.rangeProps = {

			}
			this.options = Object.assign(this.defaultProps, options)
	}


	setCustomButtons(...btnArray) {  
		this.buttons = btnArray.map(btnText => ({
			content: btnText,
			className: "button button__theme_no-bg",
		}));
	}

	findDatePicker() {
		this.datePicker = document.querySelectorAll('.js-date-picker');
	}
	


	init() {
			this.datePicker.forEach((item) => {
				new AirDatepicker(item, this.options);
				if (item.dataset.pos) {
							item.addEventListener('change', ()=> {
								const dateArray = item.value.split(' - ');
								const container = item.closest('.js-date-field');
								const secondInput = container.querySelector('.date-field__input[data-pos="second"]');
								secondInput.value = dateArray[1];
								
								item.value= dateArray[0];
								console.log(dateArray)
						}
					)
				}
			}
		)
	}
}

export default DatePicker;