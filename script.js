document.addEventListener("DOMContentLoaded",() => {
    const chatMessages = document.getElementById("chat-message");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");


    // Simple responses for the chatbot
const botResponses = {
  // Greetings
  hello: "Hello! How can I help you today?",
  hi: "Hi there! How can I assist you?",
  hey: "Hey! What can I do for you?",

  // General questions
  "how are you": "I'm doing well, thank you! How about you?",
  "what is your name": "I'm sivanesh!",
  "who are you": "I'm a chatbot created by sivanesh to help answer simple questions.",
  "what can you do": "I can answer simple questions and have basic conversations.",

  // Help-related
  help: "Sure! Ask me a question or say hello to get started.",
  "can you help me": "Of course! What do you need help with?",
  "what should i ask": "You can ask me about my abilities, say hello, or ask basic questions.",

  // Time & day (simple responses)
  "what day is it": "I can't check the calendar, but I hope you're having a good day!",
  "what time is it": "I can’t tell the exact time, but it’s a great time to learn something new!",

  // Feelings
  "i am bored": "Maybe try learning something new or asking me a fun question!",
  "i am sad": "I'm sorry to hear that. I hope things get better soon.",
  "i am happy": "That's great to hear! 😊",

  // Goodbye
  bye: "Goodbye! Have a great day!",
  goodbye: "See you later!",
  "see you": "Take care!",

  // Default
  default: "I'm not sure I understand. Could you try asking something else?"
};


// Function to add a message to the chat
function addMessage(message, isUser = false) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message");
  messageDiv.classList.add(isUser ? "user-message" : "bot-message");

  const messageText = document.createElement("p");
  messageText.textContent = message;
  messageDiv.appendChild(messageText);
  
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}


// Function to get bot response
function getBotResponse(userMessage) {
  const lowerMessage = userMessage.toLowerCase();

  for (const [key, value] of Object.entries(botResponses)) {
    if (lowerMessage.includes(key)) {
      return value;
    }
  }

  return botResponses.default;
}


// Function to handle sending messages
function sendMessage() {
  const message = userInput.value.trim();

  if (message) {
    addMessage(message, true);
    userInput.value = "";

    // Simulate bot thinking
    setTimeout(() => {
      const botResponse = getBotResponse(message);
      addMessage(botResponse);
    }, 500);
  }
}


//Event listeners
sendButton.addEventListener("click",sendMessage)

userInput.addEventListener("keypress",(e) =>{
    if(e.key == "Enter")
    {
        sendMessage()
    }
});


});


