import './room-details.scss';

import '@/components/card-booking';

import '@/components/review';

import '@/components/chart';

import '@/components/header';

import BookingController from "./BookingController";

document.addEventListener("DOMContentLoaded", () => {
  const Controller = new BookingController();
  Controller.init();
})