const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  req.body.user = null;
  const authHeader = req.headers.authorization;
  
  if (!authHeader)
    return res.status(401).send({ error: "O token não foi informado" });
    
  const parts = authHeader.split(" ");
  
  if (!parts.length === 2)
    return res.status(401).send({ error: "Token com erro" });
    
  const [scheme, token] = parts;
  
  if (!/^Bearer$/i.test(scheme))
    return res.status(401).send({ error: "Token mal formatado" });
    
  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) return res.status(401).send({ error: "Token invalido" });
    req.body.user = decoded.user;
    return next();
  });
};