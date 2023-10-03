let jwt = require("jsonwebtoken");
const { UserModel } = require("../model/user.Model");



const auth =  async(req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  try {
    const decoded = jwt.verify(token, 'omkar');
    const user = await UserModel.findById(decoded.userID);
console.log("h")
    if (!user) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    req.user = user;
    if (user.account_Status === 'Suspended') {
      return res.status(403).json({ message: 'You are not authorized. Your account is not active.' });
    }

    next();
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
};



// for admin auth
const authAdmin =  async(req, res, next) => {
  const token = req.headers.authorization;

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
     // Check if the user is an admin
     if (user.role === 'Admin') {
      // Admin is authorized to access this route
      next();
    } else {
      return res.status(403).json({ message: 'Unauthorized. You are not an admin.' });
    }
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports={
    auth,
    authAdmin
}
