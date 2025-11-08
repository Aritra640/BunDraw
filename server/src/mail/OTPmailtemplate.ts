export function OTPtemplate(username: string, otp: string): string {
  return `
  <!DOCTYPE html>
  <html lang="en" style="margin:0;padding:0;">
    <body style="background:#f7f7f7;font-family:Arial,Helvetica,sans-serif;padding:20px;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:480px;margin:auto;background:#ffffff;border-radius:10px;overflow:hidden;">
        <tr>
          <td style="background:#0d6efd;color:#ffffff;text-align:center;padding:18px 0;font-size:20px;font-weight:bold;">
            YourApp
          </td>
        </tr>

        <tr>
          <td style="padding:24px;font-size:16px;color:#333;">
            <p style="margin:0 0 12px;">Hi <strong>${username}</strong>,</p>
            <p style="margin:0 0 16px;">
              Here’s your One-Time Password (OTP). Use it to continue signing in:
            </p>

            <div style="text-align:center;margin:26px 0;">
              <span style="display:inline-block;background:#0d6efd;color:#ffffff;font-size:28px;letter-spacing:4px;padding:12px 20px;border-radius:6px;font-weight:bold;">
                ${otp}
              </span>
            </div>

            <p style="margin:0 0 10px;color:#666;font-size:14px;">
              This code will expire in <strong>5 minutes</strong>.
            </p>
            <p style="margin:0;font-size:14px;color:#666;">
              If you didn’t request this, you can safely ignore this email.
            </p>
          </td>
        </tr>

        <tr>
          <td style="text-align:center;font-size:12px;color:#999;padding:18px;">
            © 2025 BunDraw. All rights reserved.
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
}

