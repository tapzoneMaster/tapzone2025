document.getElementById("donationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const amount = document.getElementById("amount").value;
  const method = document.getElementById("method").value;

  if (amount < 100) {
    document.getElementById("donationMessage").innerText = "❌ Minimum donation is Rs.100";
    return;
  }

  document.getElementById("donationMessage").innerText =
    `✅ Thank you for your donation of Rs.${amount} via ${method.toUpperCase()}! May Allah reward you.`;
});
