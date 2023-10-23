import axios from 'axios'

export const getPictures = async (search) => {
    const response = await axios.get(`https://pixabay.com/api/?q=${search}&page=1&key=32473548-3011831d563d5a9dc36fe58a5&image_type=photo&orientation=horizontal&per_page=12`);
    return response.data;
};