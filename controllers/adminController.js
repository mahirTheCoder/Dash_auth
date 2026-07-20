const adminCheck = (req, res, next) => {
res.status(200).json({ message: "Admin check successful" });
};


module.exports = { adminCheck };