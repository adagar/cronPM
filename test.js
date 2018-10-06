var randomAdder = () => {
  let numList = [];

  for (var i = 0; i < 15; i++) {
    let newRand = Math.floor(Math.random() * 90) + 10;
    //console.log(newRand);
    numList.push(newRand);
  }

  let sum = numList.reduce((total, amount) => total + amount);

  console.log(sum);
};

module.exports = randomAdder;
//randomAdder();
