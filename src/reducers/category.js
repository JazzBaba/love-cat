import { CATEGORY } from "../actions/type";


const getCategory = (state = [], action) => {
    switch (action.type) {
      case CATEGORY:
        state = action.payload
        return state;
      default:
        return state
    }
}

export default getCategory;