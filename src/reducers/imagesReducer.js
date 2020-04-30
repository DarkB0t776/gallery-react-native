import {SAVE_IMAGE} from '../types';
import {LIKE_IMAGE} from '../types';

export default (state = [], action) => {
  switch (action.type) {
    case SAVE_IMAGE:
      const date = new Date().toLocaleDateString();
      const id = Math.random();
      return [...state, {id, src: action.payload, liked: false, date}];
    case LIKE_IMAGE:
      const newState = [...state];
      const idx = newState.findIndex(img => img.id === action.payload);
      newState[idx].liked = !newState[idx].liked;
      return newState;
    default:
      return state;
  }
};
