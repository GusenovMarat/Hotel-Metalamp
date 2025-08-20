import '../rate-button';
import swiperSlider from '@/libs/swiper-slider';

addEventListener('DOMContentLoaded', () => {
  const selector = ".js-card-slider__gallery";
  const slider = new swiperSlider(selector);
  slider.init();
})