const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");
const result = document.getElementById("result");

spinBtn.addEventListener("click", () => {
  const deg = Math.floor(3600 + Math.random() * 360);
  wheel.style.transition = "transform 5s ease-out";
  wheel.style.transform = `rotate(${deg}deg)`;

  spinBtn.disabled = true;
  result.textContent = "🎯 Spinning...";

  setTimeout(() => {
    const rewards = ["10 Points", "50 Bonus", "Double Tap Chance", "No Win", "5% Cashback", "Try Again"];
    const prize = rewards[Math.floor(Math.random() * rewards.length)];
    result.textContent = `🎉 You won: ${prize}!`;
    spinBtn.disabled = false;
  }, 5000);
});
