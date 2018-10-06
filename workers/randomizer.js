const CronJob = require("cron").CronJob;

const randomizer = () => {
  let numList = [];

  for (var i = 0; i < 10000000; i++) {
    let newRand = Math.floor(Math.random() * 90) + 10;
    //console.log(newRand);
    numList.push(newRand);
  }

  let sum = numList.reduce((total, amount) => total + amount);

  return sum;
};

const randomWorker = new CronJob(
  "*/5 * * * * *",
  async function() {
    let newSum;
    try {
      newSum = await randomizer();
    } catch (err) {
      console.log(err);
    }

    console.log(newSum);
  },
  null,
  false,
  "America/New_York"
);

module.exports = randomWorker;
