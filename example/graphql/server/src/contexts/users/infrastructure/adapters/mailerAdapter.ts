import nodemailer from 'nodemailer';
import {
  EMAIL_FROM,
  SMTP_HOST,
  SMTP_PASS,
  SMTP_PORT,
  SMTP_USER,
} from '../../../../config/config';
import { MailerAdapter } from '../../application/adapters';



export const createMailerAdapter = (
  transporterOptions?: nodemailer.TransportOptions,
): MailerAdapter => {
  const transporter = nodemailer.createTransport(
    transporterOptions || {
      host: `${SMTP_HOST}`,
      port: Number(`${SMTP_PORT}`) || 587,
      secure: false,
      auth: {
        user: `${SMTP_USER}`,
        pass: `${SMTP_PASS}`,
      },
    },
  );

  return {
    sendMail: async (
      to: string,
      subject: string,
      html: string,
    ): Promise<void> => {
      await transporter.sendMail({
        from: `${EMAIL_FROM}` || '"No Reply" <no-reply@example.com>',
        to,
        subject,
        html,
      });
    },
  };
};
