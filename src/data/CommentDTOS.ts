import { Profile } from "./ProfileDTOS";

export type Comment = {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: Profile;
}

