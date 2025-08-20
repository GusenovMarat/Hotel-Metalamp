import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';


class swiperSlider {
  constructor(selector) {
    this.selector = selector;
		this.setDefaultProps();
  }

	setDefaultProps() {
		this.options = {
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