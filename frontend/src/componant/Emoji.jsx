import React, { useState } from 'react'
import { Picker } from 'emoji-mart';
import Dropzone, { useDropzone } from 'react-dropzone';

export const CommetBox = () => {
    const [comment, setComment] = useState('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [uploadedFiles, setUploadedFiles] = useState([]);
  
    const onDrop = (acceptedFiles) => {
      setUploadedFiles(acceptedFiles);
    };
  
    const handleEmojiClick = (emoji) => {
      setComment(comment + emoji.native);
      setShowEmojiPicker(false);
    };
  
    return (
      <div>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Type your comment..."
          rows={4}
          cols={50}
        />
        <button onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
          Emoji
        </button>
        <button onClick={() => setComment(comment + ' Text')}>Text</button>
  
        <div>
          {showEmojiPicker && (
            <Picker onSelect={handleEmojiClick} />
          )}
        </div>
  
        <div>
          <Dropzone onDrop={onDrop} accept="image/*">
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
              </section>
            )}
          </Dropzone>
        </div>
  
        <div>
          {uploadedFiles.map((file) => (
            <div key={file.name}>
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                style={{ width: '100px', height: 'auto' }}
              />
            </div>
          ))}
        </div>
      </div>
    );
}
