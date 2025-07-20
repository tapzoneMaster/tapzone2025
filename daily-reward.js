// daily-reward.js

const today = new Date().toDateString();
const lastClaim = localStorage.getItem("lastDailyReward");
const rewardAmount = 100;

function giveDailyReward() {
  if (lastClaim !== today) {
    alert(`🎉 You received ${rewardAmount} daily reward coins!`);
    localStorage.setItem("lastDailyReward", today);
    // Update wallet or balance here (fake/demo logic):
    let current = parseInt(localStorage.getItem("wallet") || "0");
    current += rewardAmount;
    localStorage.setItem("wallet", current);
  } else {
    alert("⏳ You already claimed your daily reward today!");
  }
}
