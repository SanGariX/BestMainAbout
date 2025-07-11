import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiperWorkflow = () => {
  new Swiper('.swiper-workflow', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    speed: 300,
    grabCursor: false,
    navigation: {
      nextEl: '.swiper-button-next_workflow',
      prevEl: '.swiper-button-prev_workflow',
    },
    pagination: {
      // <--- Додаємо пагінацію
      el: '.swiper-pagination_workflow',
      clickable: true,
      type: 'bullets', // Кружечки
    },
    breakpoints: {
      325: {
        slidesPerView: 1.2,
        grabCursor: true,
      },
      1440: {
        slidesPerView: 2.9,
        spaceBetween: 50,
        allowTouchMove: false,
      },
    },
  });
};

export default swiperWorkflow;
