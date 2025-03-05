function showChatbot() {
    document.getElementById('chatbot').classList.remove('hidden');
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    if (!message) return;

    const chatBody = document.getElementById('chat-body');
    chatBody.innerHTML += `<div><strong>Bạn:</strong> ${message}</div>`;

    fetchAIResponse(message).then(response => {
        chatBody.innerHTML += `<div><strong>AI:</strong> ${response}</div>`;
        chatBody.scrollTop = chatBody.scrollHeight;
    });

    input.value = '';
}

async function fetchAIResponse(message) {
    // Giả lập AI phản hồi
    const responses = [
        "Chào bạn, tôi có thể giúp gì?",
        "Sản phẩm hot hôm nay: Galaxy AI Phone.",
        "Vui lòng đợi một chút, tôi đang kiểm tra thông tin."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}
