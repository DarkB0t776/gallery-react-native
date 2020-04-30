import {SAVE_IMAGE} from '../types/index';

export const saveImage = imageSrc => {
  return {
    type: SAVE_IMAGE,
    payload: imageSrc,
  };
};
