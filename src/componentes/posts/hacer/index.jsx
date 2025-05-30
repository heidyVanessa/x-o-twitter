import { useState } from 'react';

function TweetBox({ onTweet }) {
  const [tweet, setTweet] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleTweet = () => {
    if (tweet.trim()) {
      onTweet({
        user: 'Usuario',
        handle: '@usuario',
        timestamp: new Date().toLocaleString(),
        text: tweet,
        image: imageUrl,
        link: '',
        likes: 0
      });
      setTweet('');
      setImageUrl('');
    }
  };

  return (
    <div className="tweet-box">
      <div className="user-avatar"></div>
      <div className="tweet-box-content">
        <textarea
          className="tweet-input"
          placeholder="¿Qué está pasando?"
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
        ></textarea>
        <div className="tweet-reply-settings">
          <span className="globe-icon">🌐</span>
          <span className="reply-label">Everyone can reply</span>
        </div>
        <div className="tweet-options">
          <button className="option-icon">📷</button>
          <button className="option-icon">🎥</button>
          <button className="option-icon">📊</button>
          <button className="option-icon">😊</button>
          <button className="option-icon">📅</button>
          <button className="option-icon">📍</button>
          <input
            type="text"
            className="image-url-input"
            placeholder="Opcional: URL de la imagen/GIF"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <button
          className="tweet-button"
          onClick={handleTweet}
          disabled={!tweet.trim()}
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default TweetBox;