function afmelden() {
    var antwoord = confirm("Wilt u zich afmelden?");
    if (antwoord == true) {
        alert("U wordt afgemeld!");
    }
}

function begroeten() {
    var nu = new Date();
    var uur = nu.getHours();
    console.log(uur);

    if (uur > 0 && uur <= 11) {
        document.write("Goeiemorgen");
    } else if (uur >= 12 && uur <= 17) {
        document.write("Goeiemiddag");
    } else {
        document.write("Goeienavond");
    }
}

function dollarKoers() {
    return 1.36;
}

function euroKoers() {
    return 0.74;
}

function dollarsEuros(inputDollars) {
    return inputDollars * euroKoers();
}

function wissel(bedrag, valuta) {
    if (valuta == "euro") {
        return bedrag * dollarKoers();
    } else if (valuta == "dollar") {
        return bedrag * euroKoers();
    }
}