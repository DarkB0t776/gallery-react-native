import {SAVE_IMAGE} from '../types/index';
import {LIKE_IMAGE} from '../types/index';

export const saveImage = imageSrc => {
  return {
    type: SAVE_IMAGE,
    payload: imageSrc,
  };
};

export const likeImage = imageId => {
  return {
    type: LIKE_IMAGE,
    payload: imageId,
  };
};
