document.querySelector('.ai-toggle').addEventListener('click', () => {
    document.querySelector('.chat-box').classList.toggle('show');
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatContent = document.querySelector('.chat-content');

    const userMessage = `<div><b>Bạn:</b> ${userInput}</div>`;
    chatContent.innerHTML += userMessage;

    let botReply = '';

    if (userInput.toLowerCase().includes('giá iphone')) {
        botReply = 'Giá iPhone 15 Pro Max hiện tại là 30 triệu đồng.';
    } else if (userInput.toLowerCase().includes('cửa hàng ở đâu')) {
        botReply = 'Cửa hàng hiện đang hoạt động online, giao hàng toàn quốc.';
    } else {
        botReply = 'Xin lỗi, tôi chưa hiểu câu hỏi này.';
    }

    const botMessage = `<div><b>AI:</b> ${botReply}</div>`;
    chatContent.innerHTML += botMessage;

    document.getElementById('user-input').value = '';
}
