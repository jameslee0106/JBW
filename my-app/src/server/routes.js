const main = require("./main.js");
const middleware = require("./middleware.js");
let baseURL = "/api";

module.exports = function(app){
    app.get("/api/", function(req, res) {
        main.index(req, res);
    });
    
    app.post("/api/auth/register",
        main.newUser
    );
    
    // app.post("/api/auth/login", function(req, res) {
    //     main.loginUser(req, res);
    // });

    app.post("/api/auth/login",
        main.loginUser
    );

    // app.get("/api/profile", function(req, res, next){
    //     main.profile(req, res, next);
    // });
    app.get("/api/profile",
        main.validateToken, main.profile
    );

//     app.get("/api/profile", function(req, res) {
//         main.index(req, res);
//     });
};