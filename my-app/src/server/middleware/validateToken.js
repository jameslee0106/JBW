const jsonwebtoken = require('jsonwebtoken');

const validateToken = (async function(req, res, next) {
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorizaton;
    // console.log(authHeader);
    // console.log("Reqest headers", req.get("Authorization"));
    // console.log("Reqest headers", req.headers);
    // console.log("Start");
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
        jsonwebtoken.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
            if(err) {
                res.status(401);
                throw new Error("User is not authorized");
            }
            // console.log("Decoded console log", decoded);
            req.user = decoded.user;
            // console.log("Validate Token req.user ", req.user);
            next();
        });

        if(!token) {
            res.status(401);
            throw new Error("User not authorized or token is missing");
        }
    }
    else {
        next();
    }
});

module.exports = validateToken;