const readline = require('readline');

export class Presentation{ 
    demarrer(){
        let userChoice:string = "";
        let looper:boolean = true;

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
            console.log("1. Lister les collegues \n99. Sortir\n\nVotre choix :");
            rl.question("", (input:string) => {
                userChoice = input;
                rl.close();
                switch (userChoice) {
                    case "1":
                        // traitement pour afficher la liste des clients

                        console.log("\nliste des clients");
                        this.demarrer();
                        break;
                    case "99":
                        console.log("\nAu revoir");
                        looper = false; 
                        break;
                    default: 
                        console.log("\nVous devez tapper un chiffre correspondant au menu");
                        this.demarrer();
                        break;
                }
            });
    }
}

