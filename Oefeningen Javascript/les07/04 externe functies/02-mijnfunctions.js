function afmelden() {
    var antwoord = confirm("Wilt u zich afmelden?");
    if (antwoord == true) {
        alert("U wordt afgemeld!!!");
        //window.close();
    }
}



function begroeten() {
    var vandaag = new Date();
    var uur = vandaag.getHours();

    if (uur < 12) {
        document.write("<br>Goedemorgen");
    } else if (uur >= 12 && uur < 18) {
        document.write("<br>Goedemiddag");
    } else {
        document.write("<br>Goedenavond");
    }
}



function dollarKoers() {
    return (1.36);
}

function euroKoers() {
    return (0.74);
}


function dollar_naar_euro(dollars) {
    return (dollars * euroKoers());
}


function wissel(bedrag, valuta) {
    if (valuta == 'euro') {
        return (bedrag * dollarKoers());
    } else if (valuta == 'dollar') {
        return (bedrag * euroKoers());
    }
}