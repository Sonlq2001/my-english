export type AuthResponse = {
  user: { name: string; photo: string; email: string };
  accessToken: string;
};

export type InitialStateAuth = {
  accessToken: string;
  user: DefUser | null;
};

export type PayloadLoginSuccess = {
  code: string;
};

export type ResLoginSuccess = {
  accessToken: string;
  user: DefUser;
};

export type DefUser = {
  id: string;
  email: string;
  fullName: string;
  googleId: string;
  photo: string;
  typeLogin: string;
};
