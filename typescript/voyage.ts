class Sejour{
    constructor(public _nom:string, public _prix:number){
    }
}
class SejourService {
    private sejours:Sejour[] =[];
    constructor(){
        this.sejours.push(new Sejour ("Paris",550));
        this.sejours.push(new Sejour ("Barcelone",210));
        this.sejours.push(new Sejour ("Madrid",180));
        this.sejours.push(new Sejour ("Londre",600));
        this.sejours.push(new Sejour ("Amsterdam",666));
    }
    findByName(nom:string):Sejour | void{
                for(const sejour of this.sejours){
                    if(sejour._nom === nom){
                       return console.log(sejour);
                    }
                }
                console.log("No sejour for name " + nom);
    }
}

const sejourService = new SejourService();
sejourService.findByName("ad");