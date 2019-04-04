// =====> ACCESSING OBJECTS <===== //
// You do NOT need to write tests for these questions :)

const memberOfParliament = {
  'member_id': '41460',
  'person_id': '10259',
  'name': 'David Hanson',
  'party': 'Labour',
  'constituency': 'Delyn',
  'office': [
    {
      'dept': 'Panel of Chairs',
      'position': 'Member',
      'from_date': '2017-06-22',
      'to_date': '9999-12-31'
    },
    {
      'dept': 'Justice Committee',
      'position': 'Member',
      'from_date': '2017-09-11',
      'to_date': '9999-12-31'
    },
    {
      'dept': 'Intelligence and Security Committee of Parliament',
      'position': 'Member',
      'from_date': '2017-11-16',
      'to_date': '9999-12-31'
    }
  ]
};

const mpName = memberOfParliament.KEY_HERE;
console.log(mpName);
// should log "David Hanson"


const mpSentence = EXPRESSION_HERE; // <-- should be a string of the form "My name is <name_here>, I am a member of the <party_here>, serving <constituency_name>"
console.log(mpSentence);



const lovelyFilm = {
  "title": "Forrest Gump",
  "rated": "PG-13",
  "released": "06 Jul 1994",
  "runtime": "142 min",
  "genre": "Drama, Romance",
  "director": "Robert Zemeckis",
  "writer": "Winston Groom (novel), Eric Roth (screenplay)",
  "actors": "Tom Hanks, Rebecca Williams, Sally Field, Michael Conner Humphreys",
  "plot": "The presidencies of Kennedy and Johnson, Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.",
  "language": "English",
  "country": "USA",
  "awards": "Won 6 Oscars. Another 40 wins & 67 nominations.",
  "poster": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  "metascore": "82",
  "imdbrating": "8.8",
  "imdbvotes": "1,536,054",
  "imdbid": "tt0109830",
  "type": "movie",
  "dvd": "28 Aug 2001",
  "boxoffice": "$330,000,000",
  "production": "Paramount Pictures",
  "website": "http://www.paramount.com/movies/forrest-gump/",
}


// create a const called yearOfRelease <-- this should have the value of "1994"
// console.log(yearOfRelease)


// create a const called hoursOfDuration
// console.log(hoursOfDuration) <-- should be the number of hours the film lasts for...


// create a const called boxOffice that gives the boxOffice value as a number - so with no symbols (just a number datatype)
// console.log(boxOffice)



// create a const called actorCount that counts the number of actors listed in the film object - do this by accessing the actors property of course
// console.log(actorCount)








var FILL_ME_IN;
var KEY_HERE;
var EXPRESSION_HERE;