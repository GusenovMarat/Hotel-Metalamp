import Swiper from 'swiper';

import { Navigation, Pagination } from 'swiper/modules';

Swiper.use([Navigation, Pagination]);

class swiperSlider {
  constructor(selector) {
    this.selector = selector;
		this.setDefaultProps();
  }

	setDefaultProps() {
		this.options = {
			loop: true,
      slidesPerView: 1,
			pagination: {
        el: '.swiper-pagination-img',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
			modules: [Navigation, Pagination],
    }
	}
	
	init() {
		document.querySelectorAll(this.selector).forEach((item) => {
			const swiper = item.querySelector('.swiper');
			new Swiper(swiper, this.options);
		})
	}
}

export default swiperSlider;