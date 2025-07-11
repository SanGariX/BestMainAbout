import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiperProducts = () => {
  new Swiper('.swiper-products', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    speed: 300,
    grabCursor: false,
    navigation: {
      nextEl: '.swiper-button-next_products',
      prevEl: '.swiper-button-prev_products',
    },
    pagination: {
      // <--- Додаємо пагінацію
      el: '.swiper-pagination_products',
      clickable: true,
      type: 'bullets', // Кружечки
    },
    breakpoints: {
      1430: {
        slidesPerView: 1,
        grabCursor: true,
      },
      1440: {
        slidesPerView: 2.9,
        spaceBetween: 40,
        allowTouchMove: false,
      },
    },
  });
};

export default swiperProducts;
