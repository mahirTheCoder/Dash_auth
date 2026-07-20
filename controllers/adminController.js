// const adminCheck = (req, res, next) => {
//   if (req.user.role !== "admin") {
//     return res.status(403).send({
//       success: false,
//       message: "Access denied. Only administrators can perform this action.",
//     });
//   }
//   next();
// };


// module.exports = { adminCheck };