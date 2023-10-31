"use strict";
exports.__esModule = true;
var Controller_js_1 = require("./controller/Controller.js");
var fetchController = new Controller_js_1["default"]('http://37.220.80.108/tasks');
fetchController.get();
