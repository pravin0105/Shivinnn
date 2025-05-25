const socket = io();
const chatBox = document.getElementById("chat-box");
const msgInput = document.getElementById("msg");

function sendMessage() {
  const message = msgInput.value;
  if (message.trim()) {
    socket.send(message);
    msgInput.value = "";
  }
}

socket.on("message", (msg) => {
  const p = document.createElement("p");
  p.innerText = msg;
  chatBox.appendChild(p);
  chatBox.scrollTop = chatBox.scrollHeight;
});

const button = document.querySelector('#emoji-btn');
const picker = new EmojiButton();
picker.on('emoji', emoji => {
  msgInput.value += emoji;
});
button.addEventListener('click', () => {
  picker.togglePicker(button);
});
