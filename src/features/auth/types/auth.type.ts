export type AuthResponse = {
  user: { name: string; photo: string; email: string };
  accessToken: string;
};

export type InitialStateAuth = {
  accessToken: string;
};

export type PayloadLoginSuccess = {
  code: string;
};

export type ResLoginSuccess = {
  accessToken: string;
  user: {
    id: string;
    email: string;
    fullName: string;
    googleId: string;
    photo: string;
    typeLogin: string;
  };
};
