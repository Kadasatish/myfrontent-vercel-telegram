const messageBox = document.getElementById("messageBox");

// Replace this URL with your actual backend WebSocket URL
const socket = new WebSocket("wss://telegram-backend-q7on.onrender.com");

socket.onopen = () => {
  console.log("✅ Connected to WebSocket server");
};

socket.onmessage = (event) => {
  try {
    const data = JSON.parse(event.data);
    if (data.message) {
      messageBox.textContent = data.message;
    }
  } catch (e) {
    console.error("❌ Invalid message format:", e);
  }
};

socket.onerror = (error) => {
  console.error("❌ WebSocket Error:", error);
};

socket.onclose = () => {
  console.warn("⚠️ WebSocket disconnected");
  messageBox.textContent = "Connection lost. Trying to reconnect...";
};
