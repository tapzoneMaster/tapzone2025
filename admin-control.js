document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("totalUsers").innerText = "8,512";
  document.getElementById("totalDeposits").innerText = "9,84,000";
  document.getElementById("totalWithdrawals").innerText = "6,42,000";
});

function updateSettings() {
  const bonus = document.getElementById("referralBonus").value;
  alert(`Referral Bonus updated to ${bonus}%`);
}

function sendNotification() {
  const msg = document.getElementById("message").value;
  if (msg.trim() === "") {
    alert("⚠️ Message cannot be empty!");
    return;
  }
  alert(`Notification sent: ${msg}`);
}
