var Alamein = ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"];


var GlenWaverly = ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"];

var Sandringham = ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"];


function getTrainLine(station) {
    var line;
    if (GlenWaverly.indexOf(station) > 0) {
        line = GlenWaverly;

    } else if (Sandringham.indexOf(station) > 0) {
        line = Sandringham;

    } else if (Alamein.indexOf(station) > 0) {
        line = Alamein;

    } else {
        console.log('station not found');
    }
    return line;
}


function getJourney(origin, destination) {
    // trovare da dove il punto di origine parte fra Sandringham, GlenWaverly e Alamein

    // LINEA DI PARTENZA
    var startingLine = getTrainLine(origin);
    var destinationLine = getTrainLine(destination);

    //   var startingLine;

    //   if (GlenWaverly.indexOf(origin) > 0) {
    //       startingLine = GlenWaverly;

    //   } else if(Sandringham.indexOf(origin) > 0) {
    //     startingLine = Sandringham;

    //   } else if (Alamein.indexOf(origin) > 0) {
    //     startingLine = Alamein;

    //   } else {
    //     console.log('station not found');
    //   }

    //   console.log('Linea Origine: ' + startingLine);

    //   // LINEA DI DESTINAZIONE

    //   var destinationLine;

    //   if (GlenWaverly.indexOf(destination) > 0) {
    //       destinationLine = GlenWaverly;

    //   } else if(Sandringham.indexOf(destination) > 0) {
    //     destinationLine = Sandringham;

    //   } else if (Alamein.indexOf(destination) > 0) {
    //     destinationLine = Alamein;

    //   } else {
    //     console.log('station not found');
    //   }

    console.log('Linea Destinatione:  ' + destinationLine);



    // CAPIRE SE IL MIO JOURNEY AVVIENE NELLA STESSA LINEA O C'E' UNO SCALO
    var indexOrigin = startingLine.indexOf(origin);
    var indexDestination = destinationLine.indexOf(destination);

    if (startingLine === destinationLine) {
        // DETERMINARE IL JOURNEY
        var journey = [];
        for (var i = indexOrigin; i <= indexDestination; i++) {
            journey.push(startingLine[i]);
        }
        console.log(journey);
        var stops = indexDestination - 1 + ' stops';
        console.log(stops);

    } else {
        // DAL MIO PUNTO DI ORIGINE ARRIVARE FINO A RICHMOND.
        // RICHMOND SARA' IL NUOVO PUNTO DI ORIGINE 
        // DETERMINARE IL SECONDO JOURNEY
        var indexRichmondStartingLine = startingLine.indexOf('Richmond');

        // PRIMO JOURNEY = DA ORIGINE FINO A Richmond
        var firstJourney = [];
        for (var j = indexOrigin; j <= indexRichmondStartingLine; j++) {
            firstJourney.push(startingLine[j]);
        }
        console.log(firstJourney);


        //  SECONDO JOURNEY = DA RICHMOND FINO A DESTINAZIONE
        var secondJourney = [];
        var indexRichmondDestinationLine = destinationLine.indexOf('Richmond');
        for (var k = indexRichmondDestinationLine; k <= indexDestination; k++) {
            secondJourney.push(destinationLine[k]);
        }

        var journey = firstJourney + secondJourney;

        var stopsTwoJourneys = (firstJourney.length - 1) + (secondJourney.length - 1);
        console.log(stopsTwoJourneys);

    }

}

getJourney("Melbourne Central", "East Richmond");
