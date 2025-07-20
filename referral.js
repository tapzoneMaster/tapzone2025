// referral.js

// Get referral code from URL if exists
const urlParams = new URLSearchParams(window.location.search);
const refCode = urlParams.get('ref');

if (refCode) {
  localStorage.setItem('referralCode', refCode);
}

// On registration page, attach referral code (optional)
function getReferralCode() {
  return localStorage.getItem('referralCode') || null;
}

// You can use getReferralCode() while submitting the form
