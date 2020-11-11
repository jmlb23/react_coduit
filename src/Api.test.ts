import { apiClient } from "./data/Api"
import { isOther } from "./data/Error";

test("test login call login with a valid user should return a valid user", async () => {
  return apiClient.login({ email: "proba@yopmail.com", password: "def456.." }).then(x => {
    console.log(x)
    expect(isOther(x)).toBeTruthy()
  })
});

// describe("on valid register payload", () => {
//   it("should return a valid user", () => {
//     return apiClient.addUser({ email: "mail2@yopmail.com", password: "def456..", username: "mail2" }).then(x =>
//       isOther(x) ? expect(x.email).toBe("mail2@yopmail.com") : fail(x.errors)
//     );
//   })
// })


describe("on valid token", () => {
  it("should return a valid user", () => {
    return apiClient.login({ email: "mail2@yopmail.com", password: "def456.." }).then(x => {
      if (isOther(x))
        return apiClient.getUser(x.token).then(x => expect(isOther(x)).toBeTruthy())
    }
    );
  })
});


describe("on valid token", () => {
  it("should return a valid user", () => {
    return apiClient.login({ email: "mail2@yopmail.com", password: "def456.." }).then(x => {
      if (isOther(x))
        return apiClient.getProfile(x.username, x.token).then(x => { return expect(isOther(x)).toBeTruthy() })
    }
    );
  })
});

describe("on valid token", () => {
  it("should return a valid user", () => {
    return apiClient.login({ email: "mail2@yopmail.com", password: "def456.." }).then(x => {
      if (isOther(x))
        return apiClient.feed(x.token).then(x => { return expect(isOther(x)).toBeTruthy() })
    }
    );
  })
});

describe("on valid user update", () => {
  it("should return a valid user", () => {
    return apiClient.login({ email: "mail2@yopmail.com", password: "def456.." }).then(x => {
      if (isOther(x))
        return apiClient.updateUser(x.token, { email: "mail2@yopmail.com", bio: "bio", image: "==", username: x.username }).then(x => expect(isOther(x)).toBeTruthy())
      else fail("Error")
    }
    );
  })
});
