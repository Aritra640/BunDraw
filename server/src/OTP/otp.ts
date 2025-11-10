import crypto from "crypto";

function generateRAWOtp(): string {
  return crypto.randomInt(100000, 999999).toString();
}

export async function GenerateUniqueOtp(
  existing: Map<string, { otp: string; expires: number }>,
): Promise<string> {
  let otp: string = "";

  do {
    otp = generateRAWOtp();
  } while (
    Array.from(existing.values()).some(
      (entry) => entry.otp === otp && entry.expires > Date.now(),
    )
  );

  return otp;
}

