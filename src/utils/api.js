import axios from 'axios';

const API_URL = 'https://gp-super-store-api.herokuapp.com';

// create function to fetch data
const fetchItemList = (qParams = {}) => {
  const { size, from, q, sortDir, isOnSale } = qParams;
  // add try catch or then catch to handle exeptions
  return axios
    .get(`${API_URL}/item/list`, {
      params: {
        size,
        from,
        q,
        sortDir,
        isOnSale,
      },
    })
    .then(res => res.data);
  // return response from api
};

export default fetchItemList;
