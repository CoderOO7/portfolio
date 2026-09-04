import React, {useContext, useState, useEffect, useRef} from "react";
import StyleContext from "../../contexts/StyleContext";
import {greeting} from "../../portfolio";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import {fetchProfileData} from "../../utils";
import { REACT_APP_PORTFOLIO_AI_API_URL } from "../../constants";

import "./ChatBot.scss";

export default function ChatBot() {
  const {isDark} = useContext(StyleContext);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(() => [
    {
      id: 1,
      text: `Hi! I'm ${greeting.name}'s AI assistant. Ask me anything about ${greeting.name}'s experience, projects, or skills.`,
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const loadAvatar = async () => {
      const profile = await fetchProfileData();
      if (profile) {
        setAvatarUrl(profile.avatarUrl);
      }
    };
    loadAvatar();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
  };

  const handleSubmit = async () => {
    const trimmed = inputValue.trim();
    if (!trimmed || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: trimmed,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch(`${ REACT_APP_PORTFOLIO_AI_API_URL }/api/v1/chat`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({message: trimmed})
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      console.log("data----");
      const botMessage = {
        id: Date.now() + 1,
        text: data.response || "No response received.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "Sorry, something went wrong. Please try again later.",
          isUser: false,
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className={
            isDark ? "chatbot-window chatbot-window-dark" : "chatbot-window"
          }
        >
          <ChatHeader
            username={greeting.name}
            avatarUrl={avatarUrl}
            onClose={() => setIsOpen(false)}
            isDark={isDark}
          />
          <div className="chatbot-messages">
            {messages.map(msg => (
              <ChatMessage
                key={msg.id}
                text={msg.text}
                isUser={msg.isUser}
                isDark={isDark}
              />
            ))}
            {isLoading && (
              <ChatMessage isUser={false} isDark={isDark} isTyping={true} />
            )}
            <div ref={messagesEndRef} />
          </div>
          <ChatInput
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onSubmit={handleSubmit}
            isLoading={isLoading}
            isDark={isDark}
          />
        </div>
      )}
      <button
        className={isDark ? "chatbot-fab chatbot-fab-dark" : "chatbot-fab"}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </>
  );
}
