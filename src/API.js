import axios from 'axios'

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '32473548-3011831d563d5a9dc36fe58a5';

export const getPictures = async (search, page) => {
    const option = {
      headers: {
        'Content-type': 'application/json',
      },
      params: {
        key: API_KEY,
        q: `${search}`,
        image_type: 'photo',
        photo: 'horizontal',
        safesearch: 'true',
        page: `${page}`,
        per_page: 12,
      },
    };
    const { data } = await axios(BASE_URL, option);
    return data;
  };