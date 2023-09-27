let jwt = require("jsonwebtoken");

const auth =  (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token)
  if (!token) {
    res.send("user is not hae access");
  } else {
    jwt.verify(token, "masai", (err, decoded) => {
      if (decoded) {
        next()
      }else{
        res.send("not hae acces")
      }
    });
  }
};

module.exports={
    auth
}
