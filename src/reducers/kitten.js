import { KITTEN, KITTENAPPAND } from "../actions/type";

var initialState = {
  data: [],
  categoryId: 0,
  page:0
}

const getKitten = (state = initialState, action) => {
  switch (action.type) {
    case KITTENAPPAND:
      var data = state.data.concat(action.payload);
      state.data = data
      state.categoryId = action.categoryId;      
      state.page = action.page;      
      return state;
    case KITTEN:
      console.log("action.payload - ",action.payload)
      state.data = [];
      state.data = action.payload
      state.categoryId = action.categoryId;     
      state.page = action.page;      
      return state
    default:
      return state
  }
}

export default getKitten;