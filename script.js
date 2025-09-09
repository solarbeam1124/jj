const username = prompt("Enter your username:");
const messagesList = document.getElementById("messages");
const input = document.getElementById("messageInput");

// BroadcastChannel for real-time tab communication
const channel = new BroadcastChannel("chat_channel");

function sendMessage() {
  const message = input.value.trim();
  if (message) {
    const msgObj = { username, message, timestamp: Date.now() };
    displayMessage(msgObj);
    channel.postMessage(msgObj);
    input.value = "";
  }
}

function displayMessage({ username, message }) {
  const li = document.createElement("li");
  li.textContent = `${username}: ${message}`;
  messagesList.appendChild(li);
}

// Listen for messages from other tabs
channel.onmessage = (event) => {
  displayMessage(event.data);
};
