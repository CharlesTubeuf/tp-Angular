var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this.sejours = [new Sejour("Paris", 550), new Sejour("Barcelone", 210), new Sejour("Madrid", 180), new Sejour("Londre", 600)];
        // this.sejours.push(new Sejour ("Paris",550));
        // this.sejours.push(new Sejour ("Barcelone",210));
        // this.sejours.push(new Sejour ("Madrid",180));
        // this.sejours.push(new Sejour ("Londre",600));
        // this.sejours.push(new Sejour ("Amsterdam",666));
    }
    SejourService.prototype.findByName = function (nom) {
        for (var _i = 0, _a = this.sejours; _i < _a.length; _i++) {
            var sejour = _a[_i];
            if (sejour._nom === nom) {
                console.log(sejour);
            }
        }
        console.log("No sejour for name " + nom);
    };
    return SejourService;
}());
var sejourService = new SejourService();
sejourService.findByName("Paris");
