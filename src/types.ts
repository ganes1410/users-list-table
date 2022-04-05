interface IUser {
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

type IUsersList = IUser[];

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type ISelectedUserId = number | null;
type ISelectedTab = "profile" | "post" | null;

export type { IUser, IUsersList, IPost, ISelectedUserId, ISelectedTab };
