"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
var node_1 = __importDefault(require("node-"));
var Service = /** @class */ (function () {
    function Service() {
    }
    Service.prototype.listCollegues = function () {
        node_1.default("https://c1.cleverapps.io/collegues")
            .then(function (resp) { return resp.json(); })
            .then(function (data) {
            var model = data.results;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    return Service;
}());
exports.Service = Service;
(function (res) {
    if (res.ok) {
        return res.json();
    }
})
    .then(function (value) {
    console.log(value);
})
    .catch(function (err) {
    // Une erreur est survenue
});
