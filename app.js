// exercice LET
let favoriteCityId = "rome";
console.log(favoriteCityId);
favoriteCityId = "paris";
console.log(favoriteCityId);



// exercice CONST
const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesId);
// citiesId = []; 
citiesId.push("tokyo");
console.log(citiesId);



// Exercice Création d'objet
function getWeather(cityId) {
    let city = cityId.toUpperCase();
    let temperature = 20;
    return {
        city,
        temperature
    };
}
const weather = getWeather(favoriteCityId);
console.log(weather);


// Affectation destructurée
let city = weather.city;
let temperature = weather.temperature;
console.log(city);
console.log(temperature);



// le REST OPERATOR
const [parisId, nycId, ...othersCitiesId] = citiesId;
console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);



// Exercice sur la Class
class Trip {
    constructor(id, name, imageURL) {
        this.id = id;
        this.name = name;
        this.imageURL = imageURL;
    }
    get price() {
        return this._price;
    }
    set price(newPrice) {
        this._price = newPrice;
    }
    toString() {
        return "Trip [" + this.id + ", " + this.name + ", " + this.imageURL + ", " + this.price + "]";
    }
    static getDefaultTrip() {
        return new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg");
    }
}

let parisTrip = new Trip("paris", "Paris", "img/paris.png");

console.log(parisTrip);
console.log(parisTrip.name);

parisTrip._price = 100;

console.log(parisTrip.toString());

const defaultTrip = Trip.getDefaultTrip();

console.log(defaultTrip.toString());


// Exercice sur l'Heritage
class FreeTrip extends Trip {
    constructor(id, name, imageURL) {
        super(id, name, imageURL);
        this._price = 0;
    }

    toString() {
        return "Free" + super.toString();
    }
}
const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg");
console.log(freeTrip.toString());


//  Exercice Promise, Set, Map, Arrow Function
class TripService {
    constructor() {
        let trips = new Set();
        trips.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        trips.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'));
        trips.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
    }
    findByName(tripName) {
        return new Promise((resolve, reject) => {
            setTimeout((err, tripName) => {
                let trips = new TripService();
                for(let i = 0 ; i<=trips.length ; i++){
                    if (Element.name === tripName) {
                        trip = Element;
                    }
                };
                if (trip.name != tripName) {
                    reject("No trip with name " + tripName);
            } else {
                    resolve(trip);
                }
            }, 2000)
        });
    }
}

let tripService = new TripService();
let trip = tripService.findByName("Paris");
console.log(trip);
/*
class PriceService {
    constructor() {
        // TODO Map of 2 trips
        let priceService = new Map();
        priceService.set("paris", 100);
        priceService.set("rio-de-janeiro", 800);
        // 'paris' --> price = 100
        // 'rio-de-janeiro' --> price = 800)
        // no price for 'nantes'
    }
    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // ici l'exécution du code est asynchrone
                // TODO utiliser resolve et reject en fonction du résultat de
                // la recherche
            }, 2000)
        });
    }
}   */