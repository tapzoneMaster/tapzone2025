document.addEventListener('DOMContentLoaded', function () {
  const userEmail = localStorage.getItem('email') || 'your@email.com';
  const referralCode = btoa(userEmail).slice(0, 8).toUpperCase(); // Unique code
  const referralLink = `${window.location.origin}/register.html?ref=${referralCode}`;

  document.getElementById('userReferralCode').innerText = referralCode;
  document.getElementById('referralLink').value = referralLink;

  // Dummy Stats
  const totalReferrals = Math.floor(Math.random() * 50); // Fake counter
  const bonusEarned = totalReferrals * 20;

  document.getElementById('totalReferrals').innerText = totalReferrals;
  document.getElementById('bonusEarned').innerText = `Rs. ${bonusEarned}`;
});

function copyReferralLink() {
  const input = document.getElementById('referralLink');
  input.select();
  document.execCommand('copy');
  alert('Referral link copied!');
}
