import React, { useEffect, useState } from 'react';
import './chat.css';

export default function Chating({ name, socket, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = () => {
    if (currentMessage.trim() !== "") {
      const messageData = {
        room: room,
        author: name,
        message: currentMessage,
      };

      setMessageList((list) => [...list, messageData]); // Update message list immediately
      socket.emit("send-message", messageData); // Send message to server
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      // Filter out messages sent by the current user
      if (data.author !== name) {
        setMessageList((list) => [...list, data]);
      }
    });

    // Clean up
    return () => {
      socket.off("receive_message");
    };
  }, [socket, name, setMessageList]);

  return (
    <div className='chating-app'>
      <div className="chating">
        <header>Welcome To chatapp</header>
        <div className="uldiv">
          <ul className="message-list">
            {messageList.map((messageContent, index) => (
              <li
                key={index}
                className={messageContent.author === name ? "sent" : "received"} // Apply different classes based on message sender
              >
                {messageContent.message}
                {messageContent.author !== name && <p className='author'>{messageContent.author}</p>} {/* Render author's name if sender is different */}
              </li>
            ))}
          </ul>
        </div>
        <footer>
          <input type="text" placeholder='Enter some text here...' value={currentMessage} onChange={(e) => setCurrentMessage(e.target.value)} />
          <button onClick={sendMessage}>Send</button>
        </footer>
      </div>
    </div>
  );
}
