import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatEntryComponents = props.entries.map((chatEntry) => {
    return (
      <ChatEntry
        key={chatEntry.id}
        id={chatEntry.id}
        sender={chatEntry.sender}
        body={chatEntry.body}
        timeStamp={chatEntry.timeStamp}
        liked={chatEntry.liked}
        onLikeToggle={props.onLikeToggle}
      ></ChatEntry>
    );
  });

  return (
    <section className="chat-log">
      {chatEntryComponents}
    </section>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onLikeToggle: PropTypes.func,
};

export default ChatLog;