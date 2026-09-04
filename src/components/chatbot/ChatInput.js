import React from "react";

export default function ChatInput({
  value,
  onChange,
  onSubmit,
  isLoading,
  isDark
}) {
  const handleKeyDown = e => {
    if (e.key === "Enter" && !e.shiftKey && value.trim()) {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <div
      className={isDark ? "chatbot-input chatbot-input-dark" : "chatbot-input"}
    >
      <input
        id="chatbot-message"
        type="text"
        className="chatbot-input-field"
        placeholder="Type your message..."
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        disabled={isLoading}
      />
      <button
        className="chatbot-send-btn"
        onClick={onSubmit}
        disabled={isLoading || !value.trim()}
        aria-label="Send message"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 2L11 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 2L15 22L11 13L2 9L22 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
