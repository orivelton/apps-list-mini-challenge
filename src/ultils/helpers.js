/* eslint-disable no-extend-native */
import config from '../consts/config';
const {pageSize} = config;


const sortByascending = (a,b) => (a.total > b.total) ? 1 : ((b.total > a.total) ? -1 : 0);
const countPage = (dataLength) => Math.ceil( dataLength / pageSize);

const handleSearch = (chunk, searchTerm, isCategories) => {
  return chunk.flat().filter((
    {name, categories}
  ) => isCategories ? categories.includes(searchTerm) : name.toLowerCase().includes(searchTerm.toLowerCase()));
};


Object.defineProperty(Array.prototype, 'chunk', {
  value: function(chunkSize){
      var chunks = [];
      for (var i = 0; i < this.length; i+= chunkSize) chunks.push(this.slice(i,i+chunkSize))
      return chunks;
  }
});

const formatData = data => {
  if(!data.length) return [];

  const formated = data.map(item => {
    const {subscriptions, categories} = item;
    const total = subscriptions.reduce((acc, cur) => acc + cur.price, 0);

    categories.sort();
    return {...item, total};
  }).sort(sortByascending);
  
  return formated.chunk(pageSize);
}

export { formatData, countPage, handleSearch };
