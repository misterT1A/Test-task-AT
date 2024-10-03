import { useEffect } from 'react';

import { addUsers } from '../store/activeUsers';
import { useGetUsersQuery } from '../store/apiSlice';
import { useAppDispatch } from './storeHooks';

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
