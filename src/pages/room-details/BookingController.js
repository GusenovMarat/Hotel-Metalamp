class BookingController {
  constructor() {
    this.setClasses();
    this.findController();
  }

  setClasses() {
    this.BookingContainer = '.js-room-details__booking',
    this.BookingToggle = '.js-booking-toggle',
    this.BookingCard = '.js-booking-card',
    this.BookingIcon = '.js-booking-icon',
    this.BookingText = '.js-booking-text',
    this.Expand = 'room-details__booking-expanded',
    this.IconActive = 'room-details__booking-icon-active'

  }
  findController() {
    this.Card = document.querySelector(this.BookingContainer);
  }
  init() {
    const toggle = this.Card.querySelector(this.BookingToggle);
    const card = this.Card.querySelector(this.BookingCard);
    const icon = this.Card.querySelector(this.BookingIcon);
    const text = this.Card.querySelector(this.BookingText);

    toggle.addEventListener('click', () => {
      const isExpanded = card.classList.toggle(this.Expand);
      icon.classList.toggle(this.IconActive);
      text.textContent = isExpanded ? 'скрыть бронирование' 
      : 'раскрыть бронирование';
      if (isExpanded) {
        setTimeout(() => {
          this.Card.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }, 100);
      }
    })
  }
}

export default BookingController;