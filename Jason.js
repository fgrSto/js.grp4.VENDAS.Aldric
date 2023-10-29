let noms = ["Jotaro", "Joseph", "Kakyoin", "Abdul", "Jean Pierre Polnareff"]
let cliche = ["Star Platinium", "Hermit Purple", "Hierophant Green", "Magicien Red", "Silver Chariot"]
let hp = 100
let kill = 0

class Survivant {
    constructor (name, stand) {
        this.name = name
        this.stand = stand
    }
}

while (hp > 0 && kill < 5) {
    let S0 = new Survivant (noms[Math.floor(Math.random() * noms.length)], cliche[Math.floor(Math.random() * cliche.length)])
    let action = Math.round((Math.random()) * 10) / 10

    if (action == 0.5) {
        hp -= 10
        console.log (S0.name, "a inflige 10 dmg a Dio avec", S0.stand)
    }

    if (action == 0.3) {
        kill++
        console.log (S0.name, "meurt")
        let killedNameIndex = noms.findIndex(filter=>filter===S0.name)
        let killedStandIndex = cliche.findIndex(filter=>filter===S0.stand)
        noms.splice(killedNameIndex,1)
        cliche.splice(killedStandIndex,1)
    }

    if (action == 0.2) {
        hp -= 15
        kill++
        console.log (S0.name, "a inflige 15 dmg a Dio avant de mourrir avec", S0.stand)
        let killedNameIndex = noms.findIndex(filter=>filter===S0.name)
        let killedStandIndex = cliche.findIndex(filter=>filter===S0.stand)
        noms.splice(killedNameIndex,1)
        cliche.splice(killedStandIndex,1)
    }


    if (hp <= 0) {
        console.log("Dio has died")
        break
        
    }

    if (kill == 5) {
        console.log ("Dio still have ",hp, "hp. The Crusaders have failed...")
        break
    }
}