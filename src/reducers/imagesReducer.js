import {UPLOAD_IMAGE, LIKE_IMAGE, FETCH_IMAGES_SUCCESS} from '../types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_IMAGES_SUCCESS:
      return action.payload;
    case UPLOAD_IMAGE:
      let date = new Date();
      date = date.getTime();
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
