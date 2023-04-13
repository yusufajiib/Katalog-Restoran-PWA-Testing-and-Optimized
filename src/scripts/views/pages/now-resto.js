import RestoranDbSource from '../../data/restodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const NowPlaying = {
  async render() {
    return `
      <div class="hero">
        <!--
        <picture>
          <source srcset="./images/hero-image_3-large.jpg" media="(min-width: 1000px)">
          <img srcset="./images/hero-image_1-small.jpg" alt="hero">
        </picture>
        
        <picture>
          <source type="image/webp" srcset="./images/hero-image_3-small.webp">
          <source media="(max-width: 600px)" srcset="./images/hero-image_3-small.jpg" type="image/jpeg">
          <img src='./images/hero-image_3-large.jpg' alt="hero image" type="image/jpeg">
          <img src='./images/hero-image_3.jpg' alt="">
        </picture>
        -->
        <div class="hero__inner">
          <h1 class="hero__title">Join Kesuksesan Bersama Kami</h1>
          <p class="hero__tagline">Raih Masa Depan Cerah Keluarga Anda bersama kami</p>
        </div>
      </div>
      <div class="content">
        <h2 class="content__heading">Cabang Restoran Kami</h2>
        <div id="Restaurants" class="restos">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restoran = await RestoranDbSource.nowResto();
    console.log(restoran);
    const restoContainer = document.querySelector('#Restaurants');
    restoran.forEach((restaurant) => {
      restoContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default NowPlaying;
