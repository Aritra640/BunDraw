import * as jose from "jose";

const secretkey = new TextEncoder().encode(Bun.env.JWT || "super-secret-key");

//create a jwt token
export async function createJwt(username: string): Promise<string> {
  const token = await new jose.SignJWT({ username })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("4h")
    .sign(secretkey);

  return token;
}

//Verify jwt and extract username
export async function verifyJwt(token: string): Promise<string> {
  try {
    const { payload } = await jose.jwtVerify(token, secretkey);
    return payload.username as string;
  } catch {
    throw new Error("invalid or expired token");
  }
}
