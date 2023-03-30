import axios from 'axios';
import PropTypes from 'prop-types';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '33618403-e49ffccd3be3cb931e6ce1749';

export const getSearchedImagesApi = async (q, page = 1) => {
  const { data } = await axios.get('/', {
    params: {
      key: API_KEY,
      q,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      page,
    },
  });

  return data;
};

getSearchedImagesApi.propTypes = {
  q: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
