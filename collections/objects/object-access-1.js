// Write a function that should return "David Hanson"
function mpName(memberOfParliament) {
  return memberOfParliament.name;
}

// Write a function that should log a string of the form
// "My name is <name_here>, I am a member of the <party_here>, serving <constituency_name>"
function mpSentence(memberOfParliament) {
  return `My name is ${memberOfParliament.name}, I am a member of the ${memberOfParliament.party} party, serving ${memberOfParliament.constituency}`;
}

/*
const firstOffice = ...
console.log(firstOffice); // should log string of the first office position in the form "<dept>, <position>" - e.g. ""Panel of Chairs, Member"
*/

// const lovelyFilm = {
//   title: "Forrest Gump",
//   released: "06 Jul 1994",
//   runtime: "142 min",
//   genre: "Drama, Romance",
//   director: "Robert Zemeckis",
//   writer: "Winston Groom (novel), Eric Roth (screenplay)",
//   actors: "Tom Hanks, Rebecca Williams, Sally Field, Michael Conner Humphreys",
//   plot:
//     "The presidencies of Kennedy and Johnson, Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.",
//   language: "English",
//   country: "USA",
//   awards: "Won 6 Oscars. Another 40 wins & 67 nominations.",
//   poster:
//     "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
//   type: "movie",
//   dvd: "28 Aug 2001",
//   boxoffice: "$330,000,000",
//   website: "http://www.paramount.com/movies/forrest-gump/"
// };

// /*
// const yearOfRelease = ...
// console.log(yearOfRelease) // should have the value of "1994"
// */

// /*
// const hoursOfDuration = ...
// console.log(hoursOfDuration) // should be the number of hours the film lasts for
// */

// /*
// const boxOffice = ...
// console.log(boxOffice) // should be the boxOffice value as a number datatype (so with no symbols)
// */

// /*
// const actorCount = ...
// console.log(actorCount) // should count number of actors listed in the film object
// */

// const faveFilm = {
//   title: "Ghost World",
//   director: "Terry Zwigoff",
//   yearOfRelease: 2001,
//   musicBy: "David Kitay",
//   cast: ["Thora Birch", "Scarlett Johansson", "Brad Renfro"],
//   UKReleaseDate: "November 16, 2001",
//   USReleaseDate: "July 20, 2001",
//   language: "English",
//   runningTime: "112 minutes",
//   budget: "$7 million",
//   boxOffice: "$8.8 million"
// };

// /*
// const filmTitle = ...
// console.log(filmTitle); // should log "Ghost World"
// */

// /*
// const firstActor = ...
// console.log(firstActor); // should log "Thora Birch"
// */

// /*
// const composerSurname = ...
// console.log(composerSurname); // should log "Kitay"
// */

// /*
// const budgetAsNumber =  ...
// console.log(budgetAsNumber); // should log 7000000 (a number, not a string of '$7 million')
// */

// /*
// const totalProfit = ...
// console.log(totalProfit); // should log the difference between budget (outgoing money) and box office (income)
// */

// /*
// const daysBetweenUKAndUS = ...
// console.log(daysBetweenUKAndUS); // days between the UK release and the US release date
// */

module.exports = { mpName, mpSentence };
