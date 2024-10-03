import { useEffect } from 'react';

import { useAppDispatch } from './storeHooks';

import { useGetUsersQuery } from '../store/apiSlice';
import { addUsers } from '../store/activeUsers';

const useGetUsers = (): void => {
  const dispatch = useAppDispatch();
  const { data } = useGetUsersQuery(null);

  useEffect(() => {
    if (data) {
      dispatch(addUsers(data));
    }
  }, [data, dispatch]);
};

export default useGetUsers;
