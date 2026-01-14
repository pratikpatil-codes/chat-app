import { useState } from 'react';
import '../styles/NicknameInput.css';

function NicknameInput({ onSubmit }) {
  const [nickname, setNickname] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Only submit if nickname is not empty
    if (nickname.trim()) {
      onSubmit(nickname.trim());
    }
  };

  return (
    <div className="nickname-screen">
      <div className="nickname-card">
        <h1 className="welcome-title">Welcome to Chatter</h1>
        <p className="welcome-subtitle">Choose your display name to start chatting</p>
        
        <form onSubmit={handleSubmit} className="nickname-form">
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="Enter your nickname..."
            className="nickname-input"
            maxLength={20}
            autoFocus
          />
          
          <button 
            type="submit" 
            className="btn-primary"
            disabled={!nickname.trim()}
          >
            Start Chatting
          </button>
        </form>
        
        <p className="info-text">
          💡 You can simulate multiple users by switching your nickname later
        </p>
      </div>
    </div>
  );
}

export default NicknameInput;
