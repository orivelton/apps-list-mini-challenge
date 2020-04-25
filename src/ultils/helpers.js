/* eslint-disable no-extend-native */
import config from '../consts/config';
const {pageSize} = config;


const sortByascending = (a,b) => (a.total > b.total) ? 1 : ((b.total > a.total) ? -1 : 0);

Object.defineProperty(Array.prototype, 'chunk', {
  value: function(chunkSize){
      var chunks = [];
      for (var i = 0; i < this.length; i+= chunkSize) chunks.push(this.slice(i,i+chunkSize))
      return chunks;
  }
});

const formatData = data => {
  const formated = data.map(item => {
    const {subscriptions, categories} = item;
    const total = subscriptions.reduce((acc, cur) => acc + cur.price, 0);

    categories.sort();
    return {...item, total};
  }).sort(sortByascending);
  
  return formated.chunk(pageSize);
}

export { formatData };
