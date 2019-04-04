
const getTotalCredit = () => {
    /* should accept an array of object like this:
    const players = [
        {   player: "Alex",
            credit: "10p"
        },
        {   player: "Mitch" 
            credit: "5p"
        },
        {   player : "Haz"
            credit: "30p"
        }
    ]  
    getTotalCredit(players) should return "45p" 
    */
};



const findTillTotal = () => {
    /* should accept a till object in the form 
    { 1 : 4, 50 : 3 }
    the above object means 4 1p's and 3 50p's
    findTillTotal({ 1 : 4, 50 : 3 }) should return "154p"
    (representing the amount of pence) in the till
    */
};


const calculateShopsTotal = () => {
    /* should iterate over an array of tills to get the total cash as a number
    e.g.
     calculateTillTotal([{
        shop: "Don Luigis",
        cash: {1 : 1, 10 : 2}
    }])
    should return 11p
        calculateTillTotal([{
        shop: "Don Luigis'",
        cash: {1 : 1, 10 : 2}
    },
    {
        shop: "Vertigo",
        cash : {1 : 3, 2 : 5, 10 : 4}
    }
    should return 64 (as a number) (not much takings!)
])
    */
};


const countTreasures = () => {
    // should count all the treasures from a string of treasures similar to the one in the data folder -> /data/buried-treasure
    // Treasures can be one of 'gold-doubloon','diadem','ruby-necklace','ancient-sceptre','amulet','gold-chalice'
    // e.g 
    // countTreasures("ruby-necklace**gold-doubloon**amulet**ancient-sceptre)
    // should return 
};

const tallyMPs = () => {
    /* an typical MP object looks like this:
      {
          'member_id': '41834',
          'person_id': '10523',
          'name': 'Joan Ryan',
          'party': 'Labour',
          'constituency': 'Enfield North',
          'office': [
                      {
                          'dept': 'Panel of Chairs',
                          'position': 'Member',
                          'from_date': '2017-06-22',
                          'to_date': '9999-12-31'
                                  },
                      {
                          'dept': 'Environmental Audit Committee',
                          'position': 'Member',
                          'from_date': '2017-09-11',
                          'to_date': '9999-12-31'
                      }
                  ]
      }
    your function should iterate over an array of objects like this and  produce a tally object
    A larger array of mps is provided in the data/mps.js folder
    */
};





module.exports = { findTillTotal, calculateShopsTotal, getTotalCredit, countTreasures, tallyMPs };



