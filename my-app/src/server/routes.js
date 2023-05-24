const main = require("./main.js");
let baseURL = "/api";

module.exports = function(app){
    app.post(baseURL + "/user/new", function(req, res){
        main.newUser(req, res);
    });
};