class swiperSlider {
  constructor(options) {
    this.selector = options.selector;
    this.defaultProps = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    }
  }
}

export default swiperSlider;