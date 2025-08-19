import swiperSlider from '../../libs/swiper-slider';
import '../rate-button';
import { Slider } from '@/libs/swiper-slider';

addEventListener('DOMContentLoaded', () => {
  const options = {
    selector: ".js-card-slider__list"
  }
  const slider = new swiperSlider(options);
  slider.init();
})