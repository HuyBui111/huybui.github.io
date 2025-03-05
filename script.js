function chatWithAI() {
    const chatbot = document.getElementById('chatbot');
    chatbot.style.display = 'block';
}

function handleChat(event) {
    if (event.key === 'Enter') {
        const input = document.getElementById('chat-input');
        const message = input.value.trim();
        if (message !== '') {
            addMessageToChat('Bạn', message);
            aiReply(message);
            input.value = '';
        }
    }
}

function addMessageToChat(sender, message) {
    const chatBody = document.getElementById('chat-body');
    const messageElement = document.createElement('p');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function aiReply(message) {
    let reply = "Xin lỗi, tôi chưa hiểu câu hỏi. Vui lòng thử lại!";
    if (message.includes('giá')) {
        reply = "Hiện tại shop đang có chương trình khuyến mãi, bạn muốn hỏi dòng máy nào?";
    } else if (message.includes('iPhone')) {
        reply = "iPhone hiện đang có giá từ 20-30 triệu tuỳ dòng. Bạn cần tư vấn thêm không?";
    }
    setTimeout(() => addMessageToChat('AI', reply), 1000);
}
