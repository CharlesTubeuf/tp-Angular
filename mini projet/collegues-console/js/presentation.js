"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presentation = void 0;
var readline = require('readline');
var Presentation = /** @class */ (function () {
    function Presentation() {
    }
    Presentation.prototype.demarrer = function () {
        var _this = this;
        var userChoice = "";
        var looper = true;
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        console.log("1. Lister les collegues \n99. Sortir\n\nVotre choix :");
        rl.question("", function (input) {
            userChoice = input;
            rl.close();
            switch (userChoice) {
                case "1":
                    // traitement pour afficher la liste des clients
                    console.log("\nliste des clients");
                    _this.demarrer();
                    break;
                case "99":
                    console.log("\nAu revoir");
                    looper = false;
                    break;
                default:
                    console.log("\nVous devez tapper un chiffre correspondant au menu");
                    _this.demarrer();
                    break;
            }
        });
    };
    return Presentation;
}());
exports.Presentation = Presentation;
