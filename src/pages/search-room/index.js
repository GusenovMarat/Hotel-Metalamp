import './search-room.scss'

import '@/components/dropdown';

import '@/components/date-field';

import '@/components/range-slider';

import '@/components/checkbox';

import '@/components/card-slider';

import '@/components/header';

import SidebarDrop from './SidebarDrop';

document.addEventListener("DOMContentLoaded", () => {
  const dropSidebar = new SidebarDrop();
  dropSidebar.init();
})