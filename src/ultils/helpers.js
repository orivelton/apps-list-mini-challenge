
const sortByascending = (a,b) => (a.total > b.total) ? 1 : ((b.total > a.total) ? -1 : 0);

const formatData = data => {
  const formated = data.map(item => {
    const {subscriptions, categories} = item;
    const total = subscriptions.reduce((acc, cur) => acc + cur.price, 0);

    categories.sort();
    return {...item, total};
  }).sort(sortByascending);
  
  return formated;
}

export { formatData };
