let username = prompt("Enter your username:");
const messages = [];

function sendMessage() {
  const input = document.getElementById("messageInput");
  const message = input.value.trim();
  if (message) {
    const msgObj = { username, message };
    messages.push(msgObj);
    displayMessage(msgObj);
    input.value = "";
  }
}

function displayMessage({ username, message }) {
  const li = document.createElement("li");
  li.textContent = `${username}: ${message}`;
  document.getElementById("messages").appendChild(li);
}
scr
