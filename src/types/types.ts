import type { Dispatch } from 'react';

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface IUsersList {
  users: IUser[];
  isInActive: boolean;
}

export interface IUserItemProps {
  user: IUser;
  isOpen: boolean;
  toggleMenu: () => void;
  isInActive: boolean;
}

export interface IDropDownProps {
  userId: number;
  toggleMenu: () => void;
  isInActive: boolean;
  moveFromArchive: () => void;
  moveToArchive: () => void;
  delActive: () => void;
  delArchive: () => void;
}

export interface IFormValues {
  name: string;
  nickName: string;
  email: string;
  city: string;
  phoneNumber: string;
  companyName: string;
}

export interface IModalProps {
  setActive: Dispatch<React.SetStateAction<boolean>>;
}

export interface IFormProps {
  user: IUser;
  modalHandler: Dispatch<React.SetStateAction<boolean>>;
}
