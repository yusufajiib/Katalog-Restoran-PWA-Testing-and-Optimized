import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (restaurant) => `
  <h2 class="resto__title">${restaurant.name}</h2>
  <img class="resto__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="resto__info">
    <h3>Information</h3>
    <h4>Address</h4>
    <p>${restaurant.address}, ${restaurant.city}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    <h4>Categories</h4>
    <p>${restaurant.categories.map((category) => category.name).join(' | ')}</p>
    <h4>Foods</h4>
    <p>${restaurant.menus.foods.map((food) => food.name).join(' | ')}</p>
    <h4>Drinks</h4>
    <p>${restaurant.menus.drinks.map((drink) => drink.name).join(' | ')}</p>
  </div>
  <div class="resto__overview">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="resto__overview">
    <h3>Customer Reviews</h3>
    <p>${restaurant.customerReviews.map((customer) => customer.review).join(' | ')}</p>
  </div>
`;

const createRestoItemTemplate = (resto) => `
  <div class="resto-item">
  <div class="resto-item__header">
    <img class="resto-item__header__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}" alt="${resto.name}">
    <div class="resto-item__header__rating">
      <p>⭐️<span class="resto-item__header__rating__score">${resto.rating}</span></p>
    </div>
  </div>
  <div class="resto-item__content">
    <h3><a href="/#/detail/${resto.id}">${resto.name}</a></h3>
    <p>${resto.description}</p>
  </div>
  </div>
 `;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};
