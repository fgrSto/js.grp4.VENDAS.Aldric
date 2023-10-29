let feu = 30;
let playlist = ["Anissa", "Diggy Diggy Hole", "Kick Back", "Feed the Machine", "1"];
let tax = 0;

while (feu > 0 && tax < 10) {
    const mus = playlist[Math.floor(Math.random() * playlist.length)]

    if (mus === "Anissa") {
        tax = tax + 1;
        feu = feu -1;
        console.log(`On joue Anissa, donc on change de taxi`);
        console.log(` Taxi change ${tax} fois`);
        

    } else {
        feu = feu - 1;
        console.log(`On joue ${mus}, on ne change pas de taxi`);
        
    }
    console.log("Feu restant =", feu);
}

if (feu === 0) {
    console.log("HE'S ALIVE ! HE'S ALIVEEEE !!! (apres", tax, "changements quand meme)");
}

if (tax >= 10) {
    console.log("EXPLOSION !!!");
}