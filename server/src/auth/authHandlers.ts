import { GetUserFromEmail, GetUserFromUsername, GetUserHashedPassword } from "@server/dbutils/user";
import { createJwt } from "./jwt";

//get username and password and returns a jwt token and a boolean if password is correct
export async function signin(
  username: string,
  password: string,
): Promise<[string, boolean]> {
  const hash = await GetUserHashedPassword(username);
  const isMatch = await Bun.password.verify(password, hash);

  if (!isMatch) {
    return ["unmatched", false];
  }

  const jwt_token = await createJwt(username);
  return [jwt_token, true];
}

//get username, email and password and signup the user
export async function signup(
  username: string,
  password: string,
  email: string,
): Promise<boolean> {

  const checkdata1 = GetUserFromUsername(username);
  const checkdata2 = GetUserFromEmail(email);

  const cd1 = await checkdata1;
  const cd2 = await checkdata2;

  if (cd1[1] == true || cd2[1] == true) {
    return false;
  }

  return true;
}
