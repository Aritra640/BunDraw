export async function GetUserHashedPassword(username: string): Promise<string> {
  return "asb";
}

interface Userdata {
  Username: string;
  Email: string;
  HashedPassword: string;
  AvatarUrl?: string;
}

export async function GetUserFromUsername(
  username: string,
): Promise<[Userdata, boolean]> {
  return [
    {
      Username: "TestUser",
      Email: "testmail.mail.com",
      HashedPassword: "test hashedpassword",
    },
    true,
  ];
}

export async function GetUserFromEmail(
  email: string,
): Promise<[Userdata, boolean]> {
  return [
    {
      Username: "TestUser",
      Email: "testmail.mail.com",
      HashedPassword: "test hashedpassword",
    },
    true,
  ];
}

export type NewUser = {
  Username: string;
  Email: string;
  Password: string;
  Avatar?: string;
};

export async function AddNewUser(payload: NewUser) {}
