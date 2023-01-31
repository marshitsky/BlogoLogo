const validateName = () => {
  return {
    required: "Name is required",
    maxLength: {
      value: 20,
      message: "Too long",
    },
  };
};

const validateEmail = () => {
  return {
    required: "* email is required",
    maxLength: { value: 35, message: "* max 35 characters" },
    pattern: { value: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: "Enter a valid email" },
  };
};

const validatePassword = () => {
  return {
    required: "* password is required",
    maxLength: { value: 25, message: "* max 15 characters" },
    minLength: {
      value: 6,
      message: "min 6 characters",
    },
  };
};

export { validateName, validateEmail, validatePassword };
