// Returns a random integer between min (included) and max (excluded)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let attendees = [
];

let winner = attendees[getRandomInt(0, attendees.length)];

console.log(winner);


// Too lazy to write a web scraper. Poor man's scraper.

//  $('.j_rsvper.memberinfo-widget.memberinfo-widget-class-noIntro')
//     .each(function(index, element) {
//       names.push($(element).text().trim());
//     });

// copy(names);
