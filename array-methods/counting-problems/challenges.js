const getTotalCredit = players => {
  let addNumsTogether = 0; // initialise count to add credits to
  for (let i = 0; i < players.length; i++) {
    let playerCred = players[i].credit; // access player credits
    let removedP = playerCred.slice(0, -1); // remove 'p'
    let changedToNum = Number(removedP); // change to number
    addNumsTogether += changedToNum;
  }
  const total = addNumsTogether.toString().concat("p");
  return total;
};
// ____________________________________________________________________

const findTillTotal = () => {};

// _____________________________________________________________________

const calculateShopsTotal = arr => {
  return arr;
};

const countTreasures = () => {};

const tallyMPs = () => {};

module.exports = {
  findTillTotal,
  calculateShopsTotal,
  getTotalCredit,
  countTreasures,
  tallyMPs
};
