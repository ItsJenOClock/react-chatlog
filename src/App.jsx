import './App.css';
import messagesData from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chat</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatEntry
          sender={messagesData[0].sender}
          body={messagesData[0].body}
          timeStamp={messagesData[0].timeStamp}>
        </ChatEntry>
      </main>
    </div>
  );
};

export default App;
