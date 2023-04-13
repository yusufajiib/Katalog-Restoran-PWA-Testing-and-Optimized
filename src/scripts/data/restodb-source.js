import API_ENDPOINT from '../globals/api-endpoint';

class RestoranDbSource {
  static async nowResto() {
    const response = await fetch(API_ENDPOINT.NOW_RESTO);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestoranDbSource;
