let balance = 1000; // Initial balance
let username = "user"; // Default username
let password = "password"; // Default password

function login() {
    const inputUsername = document.getElementById("username").value;
    const inputPassword = document.getElementById("password").value;

    if (inputUsername === username && inputPassword === password) {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
        document.getElementById("user").innerText = username;
    } else {
        alert("Invalid credentials!");
    }
}

function logout() {
    document.getElementById("login-section").style.display = "block";
    document.getElementById("dashboard").style.display = "none";
}

function showDeposit() {
    resetSections();
    document.getElementById("deposit-section").style.display = "block";
}

function showWithdraw() {
    resetSections();
    document.getElementById("withdraw-section").style.display = "block";
}

function showBalance() {
    resetSections();
    document.getElementById("balance-section").style.display = "block";
    document.getElementById("balance").innerText = `₹${balance.toFixed(2)}`;
}

function deposit() {
    const amount = parseFloat(document.getElementById("deposit-amount").value);
    if (amount > 0) {
        balance += amount;
        alert(`₹${amount} deposited successfully!`);
        document.getElementById("deposit-amount").value = "";
        showBalance();
    } else {
        alert("Enter a valid amount!");
    }
}

function withdraw() {
    const amount = parseFloat(document.getElementById("withdraw-amount").value);
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        alert(`₹${amount} withdrawn successfully!`);
        document.getElementById("withdraw-amount").value = "";
        showBalance();
    } else if (amount > balance) {
        alert("Insufficient balance!");
    } else {
        alert("Enter a valid amount!");
    }
}

function showChangeCredentials() {
    resetSections();
    document.getElementById("change-credentials-section").style.display = "block";
}

function changeCredentials() {
    const newUsername = document.getElementById("new-username").value;
    const newPassword = document.getElementById("new-password").value;

    if (newUsername && newPassword) {
        username = newUsername;
        password = newPassword;
        alert("Credentials updated successfully!");
        document.getElementById("new-username").value = "";
        document.getElementById("new-password").value = "";
    } else {
        alert("Please enter both username and password!");
    }
}

function resetSections() {
    document.getElementById("deposit-section").style.display = "none";
    document.getElementById("withdraw-section").style.display = "none";
    document.getElementById("balance-section").style.display = "none";
    document.getElementById("change-credentials-section").style.display = "none";
}
