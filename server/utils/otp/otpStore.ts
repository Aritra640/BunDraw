const otpMap = new Map<string, {otp: string, expires: number}>();

export function saveOtp(email: string, otp: string) {
  otpMap.set(email, {otp, expires: Date.now() + 5*60000});
}

export function verifyOtp(email: string, code: string): boolean {
  const entry = otpMap.get(email);
  if (!entry) return false;

  if(Date.now() > entry.expires) return false;
  return entry.otp === code;
}
