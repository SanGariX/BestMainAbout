import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiperReviews = () => {
  new Swiper('.swiper-reviews', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    speed: 300,
    grabCursor: false,
    navigation: {
      nextEl: '.swiper-button-next_reviews',
      prevEl: '.swiper-button-prev_reviews',
    },
    pagination: {
      // <--- Додаємо пагінацію
      el: '.swiper-pagination_reviews',
      clickable: true,
      type: 'bullets', // Кружечки
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        allowTouchMove: true,
      },
      1440: {
        slidesPerView: 2,
        spaceBetween: 30,
        allowTouchMove: false,
      },
    },
  });
};

export default swiperReviews;
