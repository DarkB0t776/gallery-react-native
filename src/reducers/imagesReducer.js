import {SAVE_IMAGE} from '../types';

export default (state = [], action) => {
  switch (action.type) {
    case SAVE_IMAGE:
      const date = new Date('');
      return [...state, {src: action.payload, liked: false, date}];
    default:
      return state;
  }
};
