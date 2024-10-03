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
  delArchive: () => void;
  addArchive: () => void;
  delActive: () => void;
}
