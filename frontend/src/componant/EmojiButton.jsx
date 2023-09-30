import React, { useState } from 'react';
// import 'react-emoji-picker/dist/index.css';
import EmojiPicker from 'react-emoji-picker';

const EmojiButton = () => {

  const [showPicker, setShowPicker] = useState(false);

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  return (
    <div>
      <span
        role="img"
        aria-label="emoji"
        onClick={() => togglePicker()}
        style={{ cursor: 'pointer' }}
      >
        😀
      </span>
      {showPicker && (
        <div
          style={{
            position: 'absolute',
            background: '#fff',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            zIndex: 1000,
          }}
        >
          <EmojiPicker onEmojiSelect={(emoji) => console.log(emoji)} />
        </div>
      )}
    </div>
  );
  
}

export default EmojiButton
