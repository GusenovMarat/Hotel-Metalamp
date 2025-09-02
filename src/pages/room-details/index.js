import './room-details.scss';

import '@/components/card-booking';

import '@/components/review';

import '@/components/chart';

import '@/components/header';

import BookingDrop from "./BookingDrop";

document.addEventListener("DOMContentLoaded", () => {
  const dropBooking = new BookingDrop();
  dropBooking.init();
})