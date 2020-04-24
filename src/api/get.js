import axios from 'axios';
import urls from '../consts/urls';

const getApps = async () => {
  const result = await axios.get(urls.apps);
  const { data } = result;
  return data;
};

export { getApps };