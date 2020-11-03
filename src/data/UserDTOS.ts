class Login {
  constructor(public email: string, public password: string) { }
}

class User {
  constructor(public id: number, public email: string, public createdAt: string, public updatedAt: string,
    public username: string, public bio: string | null, public image: string | null, public token: string) { }
}

class Register {
  constructor(public username: string, public email: string, public password: string) { }
}

class UserUpdate {
  constructor(public email: string,
    public username: string, public bio: string, public image: string) { }
}


export {
  Login, User, Register, UserUpdate
}