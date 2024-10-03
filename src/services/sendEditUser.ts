import type { IUser } from '@/types/types';
const url = 'https://jsonplaceholder.typicode.com/users';

const sendEditUser = async (data: IUser): Promise<boolean> => {
  const response = await fetch(url + `/${data.id}`, { method: 'PUT', body: JSON.stringify(data) });
  return response.ok;
};

export default sendEditUser;
