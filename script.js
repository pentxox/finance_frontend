document.addEventListener('DOMContentLoaded', function() {
  const financeForm = document.getElementById('finance-form');
  const transactionList = document.getElementById('transaction-list');
  const balanceDisplay = document.getElementById('balance');

  let transactions = [];

  function updateBalance() {
    const total = transactions.reduce((acc, item) => acc + item.amount, 0);
    balanceDisplay.textContent = `Balance: $${total.toFixed(2)}`;
  }

  function addTransaction(description, amount) {
    const transaction = { description, amount };
    transactions.push(transaction);

    const listItem = document.createElement('li');
    listItem.textContent = `${description}: $${amount}`;
    transactionList.appendChild(listItem);

    updateBalance();
  }

  financeForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (description && amount) {
      addTransaction(description, amount);
      financeForm.reset();
    }
  });

  // Add basic login functionality
  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
      alert(`Logged in as ${email}`);
      loginForm.reset();
    }
  });
});