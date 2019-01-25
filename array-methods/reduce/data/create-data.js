const {writeFile} = require("fs");
const {sample} = require("lodash");
const makeTreasure  = (len) => {
    const treasures = ['gold-doubloon','diadem','ruby-necklace','ancient-sceptre','amulet','gold-chalice'];
    const createTreasureString = (len) => {
        return  Array.from({length: len}).reduce((str,_,i,arr) => {
            const randomTreasure = sample(treasures);
            if (i < arr.length - 1) str += `${randomTreasure}**`;
            else str += randomTreasure;
            return str;
        },'');
    }
    writeFile('./array-methods/reduce/data/buried-treasure.txt',createTreasureString(len),(err) => {
        if (err) console.log(err);
        else console.log('file written...');
    });
};

makeTreasure(10000);