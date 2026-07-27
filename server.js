require('dotenv').config()
const express = require ('express')
const router = require ('./routes')
const cookieParser = require("cookie-parser");
const {rateLimit} = require('express-rate-limit')
const dbConfig = require('./configs/dbConfig')
const PORT = process.env.PORT

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(router)
app.use(rateLimit)
dbConfig()

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	ipv6Subnet: 56, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
	// store: ... , // Redis, Memcached, etc. See below.
})


// // -----when db congfig not working then use this code t
// // const dns = require('dns');
// // dns.setServers(['8.8.8.8', '8.8.4.4'])


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});