import React from "react";

export default function ChatHeader({username, avatarUrl, onClose, isDark}) {
  return (
    <div
      className={
        isDark ? "chatbot-header chatbot-header-dark" : "chatbot-header"
      }
    >
      <div className="chatbot-header-info">
        <img src={avatarUrl} alt={username} className="chatbot-header-avatar" />
        <div className="chatbot-header-text">
          <span className="chatbot-header-name">{username}</span>
          <span className="chatbot-header-subtitle">
            Ask me about my experience
          </span>
        </div>
      </div>
      <button
        className="chatbot-close-btn"
        onClick={onClose}
        aria-label="Close chat"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L13 13M1 13L13 1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}
