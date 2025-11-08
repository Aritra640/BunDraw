export function WelcomeTemplate(username: string, email: string): string {
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
          <p style="margin:0 0 12px;">Hello <strong>${username}</strong>,</p>

          <p style="margin:0 0 16px;">
            Welcome to <strong>YourApp</strong>! We're glad to have you onboard.
          </p>

          <p style="margin:0 0 16px;">
            Your registered email is: <strong>${email}</strong>
          </p>

          <p style="margin:0 0 16px;">
            You can now sign in, explore features, and start using your account.
          </p>

          <div style="text-align:center;margin:30px 0;">
            <a href="https://yourapp.com/login" style="background:#0d6efd;color:#ffffff;text-decoration:none;padding:12px 24px;border-radius:6px;font-weight:bold;display:inline-block;">
              Go to Dashboard
            </a>
          </div>

          <p style="margin:0 0 10px;color:#666;font-size:14px;">
            If you didn't create an account using this email, please ignore this message.
          </p>
        </td>
      </tr>

      <tr>
        <td style="text-align:center;font-size:12px;color:#999;padding:18px;">
          © 2025 YourApp. All rights reserved.
        </td>
      </tr>

    </table>
  </body>
</html>
  `;
}

