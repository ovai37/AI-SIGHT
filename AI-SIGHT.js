const chatArea = document.querySelector('.chat-area');
const inputBox = document.querySelector('.input-box');
const sendButton = document.querySelector('.send-button');
const startChatButton = document.querySelector('.start-chat');

let chatHistory = [];

// Function to display a message in the chat area
function displayMessage(message, isUser) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    messageElement.classList.add(isUser ? 'user-message' : 'bot-message');
    messageElement.textContent = message;
    chatArea.appendChild(messageElement);

    // Scroll to the bottom of the chat area
    chatArea.scrollTop = chatArea.scrollHeight;
}

// Simulate bot responses
function botResponse(message) {
    setTimeout(() => {
        displayMessage(message, false);
    }, 1000);
}

// Handle send button click
sendButton.addEventListener('click', () => {
    const message = inputBox.value;
    if (message !== "") {
        displayMessage(message, true);
        chatHistory.push({ message: message, user: true }); // Add message to history
        inputBox.value = "";
        botResponse("You said: " + message); // Simulate a bot response
    }
});

// Handle start chat button click
startChatButton.addEventListener('click', () => {
    // startChatButton.style.display = 'none'; // Hide start chat button
    chatArea.innerHTML = ''; // Clear chat history
    botResponse("Hello! How can I help you?");
});

// Function to handle user input
function handleUserInput(input) {
    const lowerCaseInput = input.toLowerCase();
    if (lowerCaseInput.includes("hello")) {
        botResponse("Hi! How are you today?");
    } else if (lowerCaseInput.includes("how are you")) {
        botResponse("I'm doing great, thanks for asking!");
    } else if (lowerCaseInput.includes("what is your name")) {
        botResponse("My name is AI-SIGHT!");
    } else {
        botResponse("I didn't understand that. Can you please rephrase?");
    }
}

// Add event listener to input box
inputBox.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const message = inputBox.value;
        if (message !== "") {
            displayMessage(message, true);
            chatHistory.push({ message: message, user: true }); // Add message to history
            inputBox.value = "";
            handleUserInput(message); // Handle user input
        }
    }
});

// Function to clear chat history
function clearChatHistory() {
    chatArea.innerHTML = '';
    chatHistory = [];
}

// // Add event listener to clear chat history button
// document.addEventListener('keydown', (e) => {
//     if (e.key === 'c' && e.ctrlKey) {
//         clearChatHistory();
//     }
// });