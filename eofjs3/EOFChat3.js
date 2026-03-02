// ===== Chat with localStorage =====
const chatContainer = document.getElementById('chatContainer');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');
const chatMessages = document.getElementById('chatMessages');

// Load chat history from localStorage
function loadChatHistory() {
    const history = JSON.parse(localStorage.getItem('kvantora_chat') || '[]');
    chatMessages.innerHTML = '';

    // Default welcome message
    const welcomeMsg = {
        text: "Привет! 👋\nЯ виртуальный ассистент КВАНТОРА.\nКак я могу вам помочь?",
        sender: 'bot',
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    };

    const messagesToShow = history.length > 0 ? history : [welcomeMsg];

    messagesToShow.forEach(msg => {
        addMessageToChat(msg.text, msg.sender, msg.time, false);
    });

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Add message to chat UI
function addMessageToChat(text, sender, time, save = true) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}`;
    messageDiv.innerHTML = `
        ${text.replace(/\n/g, '<br>')}
        <div class="chat-message-time">${time}</div>
    `;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    if (save) {
        const history = JSON.parse(localStorage.getItem('kvantora_chat') || '[]');
        history.push({ text, sender, time });
        localStorage.setItem('kvantora_chat', JSON.stringify(history));
    }
}

// Send message
function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;

    const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    addMessageToChat(message, 'user', time);
    chatInput.value = '';

    // Simulate bot response
    setTimeout(() => {
        const responses = [
            "Спасибо за сообщение! Наш специалист ответит вам в ближайшее время.",
            "Отличный вопрос! Давайте обсудим детали в чате.",
            "Мы готовы помочь! Опишите ваш проект подробнее.",
            "Интересно! Можете рассказать больше о ваших целях?"
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        const botTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        addMessageToChat(randomResponse, 'bot', botTime);
    }, 1000);
}

chatSend.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

// Chat trigger
document.querySelectorAll('.chat-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        chatContainer.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => chatInput.focus(), 500);
    });
});

// Initialize chat
loadChatHistory();
