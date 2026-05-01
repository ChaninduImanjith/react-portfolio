import { useState, useRef, useEffect } from 'react';

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Chanindu's AI assistant. Ask me anything about his skills, experience, or projects!", sender: "ai" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const generateResponse = (text) => {
    const lowerText = text.toLowerCase();
    if (lowerText.includes('skill') || lowerText.includes('tech') || lowerText.includes('stack')) {
      return "Chanindu is highly skilled in:<br/><ul style='margin-left: 1rem; margin-top: 0.5rem;'><li><b>Languages:</b> Java, JavaScript, Python</li><li><b>Frontend:</b> React, Next.js, Tailwind</li><li><b>Backend:</b> Node.js, Express</li><li><b>DevOps:</b> AWS, Docker, Jenkins</li></ul>";
    } else if (lowerText.includes('project')) {
      return "He has built many impressive projects:<br/><ul style='margin-left: 1rem; margin-top: 0.5rem;'><li><b>YouTube Clone:</b> Pixel-perfect UI</li><li><b>LibraryPro:</b> Java management system</li><li><b>Jenkins Pipelines:</b> CI/CD automation</li></ul>Check out the Projects section for links!";
    } else if (lowerText.includes('experience') || lowerText.includes('work')) {
      return "Chanindu's background:<br/>• BSc Software Engineering (Undergrad)<br/>• Comprehensive Master Java Developer (IJSE)<br/>• Former Management Assistant";
    } else if (lowerText.includes('contact') || lowerText.includes('hire') || lowerText.includes('email')) {
      return "You can reach out via the <b>Contact</b> section below or connect on <a href='https://www.linkedin.com/in/chanindu-imanjith-72814431b/' target='_blank' style='color:#0ea5e9; text-decoration: underline;'>LinkedIn</a>.";
    } else if (lowerText.includes('hi') || lowerText.includes('hello') || lowerText.includes('hey')) {
      return "Hello there! 👋 How can I help you learn more about Chanindu today?";
    } else {
      return "I'm a simple assistant right now! But I can tell you Chanindu is a passionate developer. Try asking about his <b>skills</b>, <b>projects</b>, or <b>experience</b>.";
    }
  };

  const handleUserMessage = (msgText) => {
    const userMessage = { text: msgText, sender: "user" };
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const aiResponse = { 
        text: generateResponse(msgText), 
        sender: "ai" 
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 800 + Math.random() * 1000);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const currentInput = input;
    setInput("");
    handleUserMessage(currentInput);
  };

  const quickReplies = ["What are your skills?", "Show me projects", "How to contact?"];

  return (
    <>
      {/* Floating Button */}
      <button 
        className={`chatbot-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle AI Chatbot"
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        ) : (
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        )}
      </button>

      {/* Chat Window */}
      <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <div className="chatbot-avatar">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
            </div>
            <div>
              <h4>AI Assistant</h4>
              <span>Online</span>
            </div>
          </div>
          <button className="chatbot-close" onClick={() => setIsOpen(false)}>
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        <div className="chatbot-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`chat-bubble-wrap ${msg.sender}`}>
              <div className="chat-bubble" dangerouslySetInnerHTML={{ __html: msg.text }} />
            </div>
          ))}
          {isTyping && (
            <div className="chat-bubble-wrap ai">
              <div className="chat-bubble typing">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {!isTyping && messages[messages.length - 1].sender === 'ai' && (
          <div className="chatbot-quick-replies">
            {quickReplies.map((reply, idx) => (
              <button 
                key={idx} 
                className="quick-reply-btn" 
                onClick={() => handleUserMessage(reply)}
              >
                {reply}
              </button>
            ))}
          </div>
        )}

        <form className="chatbot-input-area" onSubmit={handleSend}>
          <input 
            type="text" 
            placeholder="Ask me anything..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" disabled={!input.trim()}>
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </button>
        </form>
      </div>
    </>
  );
}
