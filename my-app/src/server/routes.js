const main = require("./main.js");
let baseURL = "/api";

module.exports = function(app){
    app.get("/api/", function(req, res) {
        main.index(req, res);
    });
    
    app.post("/api/auth/registar", function(req, res) {
        main.newUser(req, res);
    });
    
    app.post("/api/auth/login", function(req, res) {
        main.loginUser(req, res);
    });

    app.get("/api/profile", function(req, res, next){
        main.profile(req, res, next);
    });
};