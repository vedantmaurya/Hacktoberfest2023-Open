const sendBtn = document.getElementById("sendBtn")
const messageInput = document.getElementById("message")
const allMessages = document.getElementById("messages")   

const socket = io();
socket.on("message", message =>{
    const p = document.createElement('p');
    p.innerText = message;
    allMessages.appendChild(p);
    console.log(message)
})

sendBtn.addEventListener("click", e =>{
    const message = messageInput.value;
    // console.log(message);
    socket.emit('user-message', message);
})
