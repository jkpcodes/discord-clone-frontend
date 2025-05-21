export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  // Check password length
  if (password.length < 8 || password.length > 30) {
    return false;
  }

  // Check for uppercase letter
  if (!/[A-Z]/.test(password)) {
    return false;
  }

  // Check for lowercase letter
  if (!/[a-z]/.test(password)) {
    return false;
  }

  // Check for number
  if (!/[0-9]/.test(password)) {
    return false;
  }

  return true;
};

export const validateUsername = (username) => {
  let trimmedUsername = username.trim();

  if (trimmedUsername.length < 3 || trimmedUsername.length > 30) {
    return false;
  }

  if (!/^[a-zA-Z0-9]+$/.test(trimmedUsername)) {
    return false;
  }

  return true;
};
