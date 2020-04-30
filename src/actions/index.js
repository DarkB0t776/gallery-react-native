import {
  SAVE_IMAGE,
  LIKE_IMAGE,
  FETCH_IMAGES_REQUEST,
  FETCH_IMAGES_SUCCESS,
} from '../types/index';

export const saveImage = imageSrc => {
  return {
    type: UPLOAD_IMAGE,
    payload: imageSrc,
  };
};

export const likeImage = imageId => {
  return {
    type: LIKE_IMAGE,
    payload: imageId,
  };
};

export const fetchImagesRequest = () => ({type: FETCH_IMAGES_REQUEST});

export const fetchImagesSuccess = data => ({
  type: FETCH_IMAGES_SUCCESS,
  payload: data,
});
