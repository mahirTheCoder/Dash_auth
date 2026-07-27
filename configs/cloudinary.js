const cloudinary = require("cloudinary").v2;

// 1. Configure your Cloudinary credentials
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

module.exports = { cloudinary };


// PORT = 8000
// BASE_URL=/api/v1
// DB_URL=mongodb+srv://management:LCjhehBpkzyuCifi@cluster0.mjewgzf.mongodb.net/hazira?appName=Cluster0

// JWT_SEC=kdfjdfhnjdhfkjdfh


// CLOUD_NAME=db21zycb0
// API_KEY=523281429566225
// API_SECRET=EymGXIZDwKF7WfcEwayZfYZyN30

// CLIENT_URL=http://localhost:5173

