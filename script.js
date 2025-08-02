const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

const responses = {
    "hi":"Hello there! I am here to assist to provide awareness on Clean Drinking Water and Sanitation. How can I help you today ?",
    "what is clean drinking water": "Clean drinking water is water that is safe to drink, free from contaminants like bacteria, viruses, and chemicals.",
    "how to ensure clean drinking water": "You can ensure clean drinking water by boiling it, using water filters, or using water purification tablets.",
    "what is water sanitation": "Water sanitation refers to the process of making water safe for drinking and usage by removing harmful elements.",
    "how to maintain water sanitation": "To maintain water sanitation, ensure proper disposal of waste, use safe latrines, and prevent contamination of water sources.",
    "benefits of clean water": "Clean water helps prevent diseases, supports agriculture, and is essential for a healthy life.",
    "importance of water conservation": "Water conservation is crucial to ensure sustainable access to clean water for everyone and protect our environment.",
    "tips for saving water": "Some tips for saving water include fixing leaks, using water-efficient appliances, and taking shorter showers.",
    "what are water borne diseases ": "Ameobiasis ,Bacillary dysentery, Cholera.",
    "What is meant by waterborne?":"supported,carried,or transmitted by water."
    
};

function addMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-message");
    messageElement.classList.add(sender === "user" ? "user-message" : "bot-message");
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

sendBtn.addEventListener("click", () => {
    const userMessage = userInput.value.trim().toLowerCase();
    if (userMessage === "") return;

    addMessage(userMessage, "user");
    userInput.value = "";

    const botResponse = responses[userMessage] || "I'm sorry, I don't understand that question. Please try asking something else.";
    addMessage(botResponse, "bot");
});

userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendBtn.click();
    }
});
