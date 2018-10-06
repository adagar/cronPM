const CronJob = require("cron").CronJob;

const mainWorker = new CronJob(
  "*/1 * * * * *",
  () => {
    console.log("you will see this every second");
  },
  null,
  false,
  "America/New_York"
);

module.exports = mainWorker;
