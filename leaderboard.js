document.addEventListener('DOMContentLoaded', function () {
  const users = [
    { name: "Ali Raza", earned: 14500 },
    { name: "Fatima Noor", earned: 12700 },
    { name: "Usman Khan", earned: 11800 },
    { name: "Sana Iqbal", earned: 11000 },
    { name: "Ahmad Ali", earned: 9800 },
    { name: "Zainab Bibi", earned: 9200 },
    { name: "Noman Shah", earned: 8700 },
    { name: "Iqra Jamil", earned: 8200 },
    { name: "Tariq Mehmood", earned: 7800 },
    { name: "Hira Farooq", earned: 7500 }
  ];

  const tableBody = document.getElementById("leaderboardData");
  users.forEach((user, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${user.name}</td>
      <td>Rs. ${user.earned}</td>
    `;
    tableBody.appendChild(row);
  });
});
