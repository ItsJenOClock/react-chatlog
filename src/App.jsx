import './App.css';
import messagesData from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [chatData, setChatData] = useState(messagesData);
  const [likedCount, setLikedCount] = useState(0);
  const toggleLike = (chatEntryId) => {
    setChatData((prevChatData) => {
      const updatedChatData = prevChatData.map((chatEntry) => {
        if (chatEntry.id === chatEntryId) {
          return { ...chatEntry, liked: !chatEntry.liked };
        } else {
          return chatEntry;
        }
      });
      let totalLikes = 0;
      updatedChatData.forEach((chatEntry) => {
        if (chatEntry.liked) {
          totalLikes++;
        }
      });
      setLikedCount(totalLikes);
      return updatedChatData;
    });
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Between {messagesData[0].sender} and {messagesData[1].sender}</h1>
        <section>
          <span className="widget" id="heartWidget">{likedCount} ❤️s</span>
        </section>
      </header>
      <main>
        <ChatLog
          entries={chatData}
          onLikeToggle={toggleLike}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;