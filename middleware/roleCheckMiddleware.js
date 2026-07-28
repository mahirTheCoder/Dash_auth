const User = require("../models/userSchema");

const requireApproved = (req, res, next) => {
      if (!req.user.isApproved) {
    return res.status(403).json({
      success: false,
      message: "Your account is pending approval from admin.",
    });
  }

  next();
}

const requireRole = (...allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to access this resource.",
      });
    }

    next();
  };
}


const requireAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      success: false,
      message: "Admin access required.", 
    });
  }

  next();
}

module.exports = { requireApproved, requireRole, requireAdmin };