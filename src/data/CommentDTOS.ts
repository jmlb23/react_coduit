import { Profile } from "./ProfileDTOS";

export class Comment {
  constructor(public id: number, public createdAt: string,
    public updatedAt: string, public body: string,
    public author: Profile) {

  }
}

