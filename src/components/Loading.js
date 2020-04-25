import React from 'react';
import useLoading from '../ultils/state/useLoading';

const Loading = () => {
  const [load] = useLoading();
  return (
    load && <span>Loading ...</span>
  )
};

export default Loading;
