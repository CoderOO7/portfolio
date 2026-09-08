export function ChatAvatar({
  src,
  alt = "",
  size,
  showActiveDot = true,
  onLoad
}) {
  return (
    <div
      className="chatbot-avatar-wrapper"
      style={size ? {width: size, height: size} : undefined}
    >
      <img src={src} alt={alt} className="chatbot-avatar" onLoad={onLoad} />
      <div className="chatbot-animation" />
      {showActiveDot && <span className="chatbot-active-dot"></span>}
    </div>
  );
}
