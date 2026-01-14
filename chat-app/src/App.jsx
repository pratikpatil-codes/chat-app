import { useState, useEffect } from 'react';
import { ref, push, onValue, remove } from 'firebase/database';
import { database } from './firebase';
import NicknameInput from './components/NicknameInput';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';
import './styles/App.css';

function App() {
  // State for current user's nickname
  const [currentUser, setCurrentUser] = useState('');
  
  // State for all chat messages - now synced with Firebase
  const [messages, setMessages] = useState([]);
  
  // State for connection status
  const [isConnected, setIsConnected] = useState(true);

  // Subscribe to Firebase messages in real-time
  useEffect(() => {
    const messagesRef = ref(database, 'messages');
    
    // Listen for changes to messages
    const unsubscribe = onValue(
      messagesRef, 
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          // Convert Firebase object to array and sort by timestamp
          const messagesArray = Object.entries(data).map(([id, message]) => ({
            id,
            ...message
          }));
          // Sort messages by timestamp (oldest first)
          messagesArray.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
          setMessages(messagesArray);
        } else {
          setMessages([]);
        }
        setIsConnected(true);
      },
      (error) => {
        console.error('Firebase connection error:', error);
        setIsConnected(false);
      }
    );

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Function to add a new message to Firebase
  const handleSendMessage = (text) => {
    if (!isConnected) {
      alert('Connection lost. Please check your internet connection.');
      return;
    }

    const newMessage = {
      user: currentUser,
      text: text,
      timestamp: new Date().toISOString(),
    };
    
    // Push to Firebase (automatically generates unique ID)
    const messagesRef = ref(database, 'messages');
    push(messagesRef, newMessage)
      .catch((error) => {
        console.error('Error sending message:', error);
        alert('Failed to send message. Please try again.');
      });
  };

  // Function to clear all chat history from Firebase
  const handleClearChat = () => {
    if (window.confirm('Are you sure you want to clear all messages? This will affect all users!')) {
      const messagesRef = ref(database, 'messages');
      remove(messagesRef)
        .catch((error) => {
          console.error('Error clearing messages:', error);
          alert('Failed to clear messages. Please try again.');
        });
    }
  };

  // Function to change nickname (allows switching users)
  const handleChangeNickname = () => {
    setCurrentUser('');
  };

  return (
    <div className="app">
      {/* Show nickname input if user hasn't set their name yet */}
      {!currentUser ? (
        <NicknameInput onSubmit={setCurrentUser} />
      ) : (
        <div className="chat-container">
          {/* Header with user info and controls */}
          <div className="chat-header">
            <div className="header-content">
              <h1 className="app-title">
                Chatter
                {!isConnected && <span className="status-indicator offline">⚠️ Offline</span>}
                {isConnected && <span className="status-indicator online">🟢 Live</span>}
              </h1>
              <div className="user-info">
                <span className="current-user">You: {currentUser}</span>
                <button onClick={handleChangeNickname} className="btn-secondary">
                  Switch User
                </button>
                <button onClick={handleClearChat} className="btn-clear">
                  Clear Chat
                </button>
              </div>
            </div>
          </div>

          {/* Main chat area */}
          <ChatWindow messages={messages} currentUser={currentUser} />

          {/* Message input at the bottom */}
          <MessageInput onSend={handleSendMessage} />
        </div>
      )}
    </div>
  );
}

export default App;
