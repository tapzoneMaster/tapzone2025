// Dummy wallet system (for local simulation)
let userWallet = {
  balance: 0,
  deposits: [],
  withdrawals: [],
  rewards: []
};

function deposit(amount) {
  userWallet.deposits.push(amount);
  userWallet.balance += amount;
}

function withdraw(amount) {
  const adminFee = Math.floor(amount * 0.28);
  const receiveAmount = amount - adminFee;

  if (userWallet.balance >= amount) {
    userWallet.withdrawals.push({ amount, receiveAmount, adminFee });
    userWallet.balance -= amount;
    return `Withdrawn Rs.${receiveAmount} after admin fee Rs.${adminFee}.`;
  } else {
    return "Insufficient balance.";
  }
}

function addReward(points) {
  userWallet.rewards.push(points);
  userWallet.balance += points;
}

function getWalletInfo() {
  return {
    balance: userWallet.balance,
    totalDeposits: userWallet.deposits.length,
    totalWithdrawals: userWallet.withdrawals.length,
    totalRewards: userWallet.rewards.length
  };
}
