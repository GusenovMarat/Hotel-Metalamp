import './search-room.scss'

import '@/components/dropdown';

import '@/components/date-field';

import '@/components/range-slider';

import '@/components/checkbox';

import '@/components/card-slider';

import '@/components/header';

import FilterDrop from './FilterDrop';

document.addEventListener("DOMContentLoaded", () => {
  const dropFilter = new FilterDrop();
  dropFilter.init();
})