
export interface EncryptAdapter {
    hash(password: string): Promise<string>;
    compare(password: string, hash: string): Promise<boolean>;
  }

  export interface JWTAdapter {
    generateToken(payload: object): string;
    verifyToken(token: string): object | string;
  }
  
  export interface MailerAdapter {
    sendMail(to: string, subject: string, html: string): Promise<void>;
  }