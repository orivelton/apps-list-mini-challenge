import axios from 'axios';


const getApps = async () => {
  console.log('here')
  const result = await axios.get('../mock/apps.json');
  console.log('>>>>>>', result.json())
};

export { getApps };