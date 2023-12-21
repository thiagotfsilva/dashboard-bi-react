import { useContext } from 'react';
import { ApiContext } from '../context/apiContext';

export const useApiContext = () => {
  return useContext(ApiContext);
};
