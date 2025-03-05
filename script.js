document.querySelector('.ai-toggle').addEventListener('click', () => {
    document.querySelector('.chat-box').classList.toggle('show');
    document.querySelector('.chat-box').style.display = 
        document.querySelector('.chat-box').classList.contains('show') ? 'block' : 'none';
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatContent = document.querySelector('.chat-content');
    if (userInput.trim() !== "") {
        const userMessage = `<div><b>Bạn:</b> ${userInput}</div>`;
        chatContent.innerHTML += userMessage;

        // Giả lập phản hồi AI
        setTimeout(() => {
            const aiReply = `<div><b>AI:</b> Xin chào! Đây là phản hồi tự động.</div>`;
            chatContent.innerHTML += aiReply;
        }, 1000);

        document.getElementById('user-input').value = '';
    }
}
