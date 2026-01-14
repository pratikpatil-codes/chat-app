import { useState } from 'react';
import '../styles/MessageInput.css';

function MessageInput({ onSend }) {
  const [message, setMessage] = useState('');

  // Handle sending a message
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Only send if message is not empty
    if (message.trim()) {
      onSend(message.trim());
      setMessage(''); // Clear input after sending
    }
  };

  // Handle Enter key to send (Shift+Enter for new line)
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="message-input-container">
      <form onSubmit={handleSubmit} className="message-form">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          className="message-textarea"
          rows="1"
          maxLength={500}
        />
        
        <button 
          type="submit" 
          className="send-button"
          disabled={!message.trim()}
        >
          <span className="send-icon">➤</span>
        </button>
      </form>
      
      <p className="input-hint">Press Enter to send • Shift+Enter for new line</p>
    </div>
  );
}

export default MessageInput;
