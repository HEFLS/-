function sendMessage() {
    var userInput = document.getElementById('user_input').value;
    fetch('/chatbot', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userInput })
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('user_input').value = '';
            document.getElementById('user_input').focus();
            var chatBox = document.getElementById('chat_response');

            chatBox.innerHTML += '<div>' + data.response + '</div>'; // Append new messages
            chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the latest message
        })
        .catch(error => console.error('Error:', error));
}
