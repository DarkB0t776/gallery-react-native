import {SAVE_IMAGE, LIKE_IMAGE, FETCH_IMAGES_SUCCESS} from '../types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_IMAGES_SUCCESS:
      console.log(action.payload);
      return action.payload;
    case SAVE_IMAGE:
      const date = new Date().toLocaleDateString();
      const id = Math.random();
      return [...state, {id, src: action.payload.uri, liked: false, date}];
    case LIKE_IMAGE:
      const newState = [...state];
      const idx = newState.findIndex(img => img.id === action.payload);
      newState[idx].liked = !newState[idx].liked;
      return newState;
    default:
      return state;
  }
};
