import axios from 'axios;';

export const fetchImagesAPI = async () => {
  try {
    const response = await axios.get(
      'https://5eaa8d34a8736600167215b1.mockapi.io/images',
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
