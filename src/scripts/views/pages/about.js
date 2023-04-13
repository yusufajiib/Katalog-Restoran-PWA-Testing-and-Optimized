import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const About = {
  async render() {
    return `
    <div class="content">
    <h2 class="content__heading">About us</h2>
    <div class="hero">
      <div class="hero__inner">
        <h1 class="hero__title"></h1>
        <p class="hero__tagline"></p>
      </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllRestos();
    const restoContainer = document.querySelector('#Like');
    restaurants.forEach((restaurant) => {
      restoContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default About;
