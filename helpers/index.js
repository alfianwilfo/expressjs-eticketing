let Validator = require("validatorjs");

let quantifyLength = (data) => {
  let length = data.length;
  let validation = new Validator(
    {
      length,
    },
    {
      length: "max:255",
    },
    {
      max: "Maximal message length 255",
    }
  );
  if (validation.fails()) {
    return validation.errors.first("length");
  }
};

let validateInputCreateDepartement = (name) => {
  let validation = new Validator(
    {
      name,
    },
    {
      name: "required|max:50",
    },
    {
      max: "Maximal departement name length 255",
      required: "Departement name can't empty",
    }
  );
  if (validation.fails()) {
    return validation.errors.first("name");
  }
};

let validateInputLogin = (data) => {
  let validation = new Validator(
    {
      username: data.username,
      password: data.password,
    },
    {
      username: "required|max:50",
      password: "required",
    },
    {
      max: "Maximal username length 255",
      required: ":attribute can't empty",
    }
  );
  if (validation.fails()) {
    let msg =
      validation.errors.first("username") ||
      validation.errors.first("password");
    return msg;
  }
};

let validateInputDepartementId = (data) => {
  if (+data === 0) {
    return null;
  } else {
    return data;
  }
};

let validateInputAdminId = (data) => {
  if (+data === 0) {
    return null;
  } else {
    return +data;
  }
};

module.exports = {
  quantifyLength,
  validateInputCreateDepartement,
  validateInputLogin,
  validateInputDepartementId,
  validateInputAdminId,
};
