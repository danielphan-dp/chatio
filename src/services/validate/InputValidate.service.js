export const validateMail = (mail) => {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(mail);
};

export const validatePassword = (password) => {
  return 6 <= password.length && password.length <= 32;
};

export const validateUsername = (username) => {
  return 3 <= username.length && username.length <= 12;
};
