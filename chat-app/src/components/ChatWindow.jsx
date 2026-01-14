import { useEffect, useRef } from 'react';
import '../styles/ChatWindow.css';

function ChatWindow({ messages, currentUser }) {
  // Reference to the bottom of the chat for auto-scrolling
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Format timestamp to readable time
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="chat-window">
      {messages.length === 0 ? (
        // Empty state when no messages
        <div className="empty-state">
          <div className="empty-icon">💬</div>
          <p className="empty-text">No messages yet</p>
          <p className="empty-subtext">Start the conversation!</p>
        </div>
      ) : (
        // Display all messages
        <div className="messages-list">
          {messages.map((message) => {
            // Check if message is from current user
            const isCurrentUser = message.user === currentUser;
            
            return (
              <div
                key={message.id}
                className={`message ${isCurrentUser ? 'message-own' : 'message-other'}`}
              >
                <div className="message-content">
                  {/* Show username for other users' messages */}
                  {!isCurrentUser && (
                    <div className="message-user">{message.user}</div>
                  )}
                  
                  <div className="message-bubble">
                    <p className="message-text">{message.text}</p>
                    <span className="message-time">{formatTime(message.timestamp)}</span>
                  </div>
                </div>
              </div>
            );
          })}
          
          {/* Invisible element to scroll to */}
          <div ref={messagesEndRef} />
        </div>
      )}
    </div>
  );
}

export default ChatWindow;
