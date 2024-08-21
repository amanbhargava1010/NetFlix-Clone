export const checkValidData = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);

  // eslint-disable-next-line no-useless-escape
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/.test(password);

  // const isNameValid = /^[a-zA-Z]+ [a-zA-Z]+$/.test(Name);

  if(!isEmailValid) return "Email ID is not Valid";
  if (!isPasswordValid) return "Password is not Valid";
  // if (!isNameValid) return " Name is not valid";

  return null;
}