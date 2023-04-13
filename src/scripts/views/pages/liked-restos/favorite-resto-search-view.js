import { createRestoItemTemplate } from '../../templates/template-creator';

class FavoriteRestoSearchView {
  getTemplate() {
    return `
       <div class="content">
        <form class="cari" style="margin:auto;max-width:300px">
          <h2 class="content__heading"><center>Restoran Favorit</center></h2>
          <input id="query" type="text" placeholder="Ketik nama restoran">
          <button disabled><i class="fa fa-search"></i></button>
        </form>
        <div id="restos" class="restos">
        
        </div>
       </div>
   `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestos(restos) {
    this.showFavoriteRestos(restos);
  }

  showFavoriteRestos(restos = []) {
    let html;
    if (restos.length) {
      html = restos.reduce((carry, resto) => carry.concat(createRestoItemTemplate(resto)), '');
    } else {
      html = this._getEmptyRestoTemplate();
    }

    document.getElementById('restos').innerHTML = html;

    document.getElementById('restos').dispatchEvent(new Event('restos:updated'));
  }

  _getEmptyRestoTemplate() {
    return '<div class="resto-item__not__found restos__not__found">Tidak ada resto untuk ditampilkan</div>';
  }
}

export default FavoriteRestoSearchView;
