let jwt = require("jsonwebtoken");
const { UserModel } = require("../model/user.Model");

const auth =  async(req, res, next) => {
  const token = req.headers.authorization;
console.log(token)
  if (!token) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  try {
    const decoded = jwt.verify(token, 'omkar');
    const user = await UserModel.findById(decoded.userID);

    if (!user) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports={
    auth
}
