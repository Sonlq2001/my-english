export type AuthResponse = {
  user: { name: string; photo: string; email: string };
  accessToken: string;
};
