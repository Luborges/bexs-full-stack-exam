const jwt = require("jsonwebtoken");

const generateToken = (params) => {
    return jwt.sign(params, process.env.SECRET, {
      // expiresIn: 8600,
    });
}

module.exports = generateToken;