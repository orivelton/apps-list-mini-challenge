import { get } from 'axios';
import urls from '../consts/config';

const getApps = async (url = urls.apps) => {
  const result = await get(url);
  const { data } = result;
  return data;
};

export { getApps };
