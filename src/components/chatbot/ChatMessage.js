import React from "react";

export default function ChatMessage({text, isUser, isDark, isTyping}) {
  if (isTyping) {
    return (
      <div className="chatbot-message chatbot-message-bot">
        <div className="chatbot-typing-indicator">
          <span className="chatbot-dot"></span>
          <span className="chatbot-dot"></span>
          <span className="chatbot-dot"></span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={
        isUser
          ? "chatbot-message chatbot-message-user"
          : "chatbot-message chatbot-message-bot"
      }
    >
      <div
        className={
          isDark ? "chatbot-bubble chatbot-bubble-dark" : "chatbot-bubble"
        }
      >
        {text}
      </div>
    </div>
  );
}
