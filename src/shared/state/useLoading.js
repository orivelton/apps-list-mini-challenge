import { useState, useCallback } from 'react'

const useLoading = (show = false) => {
  const [load, setLoad] = useState(show);
  return [load, useCallback(() => setLoad(status => !status), [])];
};

export default useLoading;
