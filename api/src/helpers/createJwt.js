const jwt = require("jsonwebtoken");

const createJwt = (id) => {
  return new Promise((resolve, reject) => {
    const payload = {
      id,
    };
    jwt.sign(
      payload,
      process.env.SECRET_KEY,
      {
        expiresIn: "3h",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("token reject");
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = createJwt