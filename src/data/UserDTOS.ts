export type LoginDTO = {
  email: string;
  password: string
}

export type User = {
  id: number;
  email: string;
  createdAt: string;
  updatedAt: string;
  username: string;
  bio: string | null;
  image: string | null;
  token: string;
}

export type Register = {
  username: string;
  email: string;
  password: string;
}

export type UserUpdate = {
  email: string;
  username: string;
  bio: string;
  image: string;
}