const REGEX = {
  Password: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/,
  firstName: /^[A-Za-z]+(?: [A-Za-z]*)?$/,
  PhoneNumber: /^\d{10}$/,
  Email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

const requiredRuleForInputField = (label: string) => ({
  required: `PLEASE ENTER ${label}`,
});

const requiredRuleForSelectField = (label: string) => ({
  required: `PLEASE SELECT ${label}`,
});

export const validationRules = {
  userId: {
    ...requiredRuleForInputField("USER ID"),
    pattern: {
      value: REGEX.Email,
      message: "ENTER VALID EMAIL ADDRESS",
    },
  },
  password: {
    ...requiredRuleForInputField("PASSWORD"),
    pattern: {
      value: REGEX.Password,
      message:
        "8-16 CHARACTERS , 1 SPECIAL CHARACTER, 1 UPPERCASE, 1 LOWERCASE, 1 NUMBER",
    },
  },
  phoneNumber: {
    ...requiredRuleForInputField("PHONE NUMBER"),
    pattern: {
      value: REGEX.PhoneNumber,
      message: "ENTER VALID PHONE NUMBER",
    },
  },
  firstName: {
    ...requiredRuleForInputField("FIRST NAME"),
    pattern: {
      value: REGEX.firstName,
      message: "ENTER VALID NAME",
    },
  },
  domain: {
    ...requiredRuleForSelectField("DOMAIN"),
  },
} as const;
