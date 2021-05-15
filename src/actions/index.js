import { CATEGORY, KITTEN } from "./type"

export function fetchCategory() {
  return function (dispatch) {
    return fetch('https://api.thecatapi.com/v1/categories')
      .then(resp => resp.json())
      .then(response => {
        dispatch({
          type: CATEGORY,
          payload: response
        });
      })
      .catch(error => {
        console.error("the kitty is not happy with categories :( - ", error)
      });
  }
}


export function fetchKitten({ limit = 10, categoryId = 1, page = 0,type = KITTEN }) {
  return function (dispatch) {
    return fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}&category_ids=${categoryId}&page=${page}`)
      .then(resp => resp.json())
      .then(response => {
        dispatch({
          type: type,
          payload: response,
          categoryId: categoryId,
          page:page        
        });
      })
      .catch(error => {
        console.error("the kitty is not happy with search :( - ", error)
      });
  }
}