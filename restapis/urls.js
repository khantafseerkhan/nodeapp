
var express = require("express");
const { defaultController, nameController } = require("./controller/controllers");


var app = express();

exports.appModule = function () {


    app.get("/", defaultController)

    app.get("/name", nameController);

    return app;

}

