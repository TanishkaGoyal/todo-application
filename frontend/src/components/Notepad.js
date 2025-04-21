import React, { useState } from 'react';

const Notepad = () => {
  const [text, setText] = useState('');

  const handleDownload = () => {
    const blob = new Blob([text], { type: 'text/plain' });
    const anchor = document.createElement('a');
    anchor.download = 'my-note.txt';
    anchor.href = window.URL.createObjectURL(blob);
    anchor.click();
  };

  return (
    <div style={styles.container}>
      <h2>🗒️ Notepad</h2>
      <textarea
        style={styles.textarea}
        rows="10"
        placeholder="Write your notes here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button style={styles.button} onClick={handleDownload}>
        ⬇️ Download Note
      </button>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    marginTop: '20px',
    display: 'inline-block',
    width: '80%',
    maxWidth: '600px'
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    resize: 'vertical'
  },
  button: {
    marginTop: '10px',
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer'
  }
};

export default Notepad;
