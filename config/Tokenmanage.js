const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');


dotenv.config();

class JWT {
    generateAccessToken(user_uid) {
        return jwt.sign({ user: user_uid }, process.env.TOKEN_SECRET,
            { expiresIn: '50m' });
    }

    generateRefreshToken(user_uid) {
        return jwt.sign({ user: user_uid }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
    }
    authenticateToken(req) {
        return new Promise((resolve, reject,) => {
            const authHeader = req.headers['authorization']
            const token = authHeader && authHeader.split(' ')[1]

            if (token == null)
                resolve({ status: false, message: "Token Not Found !" })
            else {
                jwt.verify(token, process.env.TOKEN_SECRET, (err, tokendata) => {
                    if (err)
                        resolve({ status: false, message: " Invalid or Expire Token !" })
                    else {
                        req.user = tokendata.user
                      // console.log(req.user)
                        resolve({ status: true })
                    }
                })
            }
        })
    }
}

module.exports = new JWT();