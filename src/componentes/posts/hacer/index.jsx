import { useState } from 'react';

function TweetBox () {
  const [tweet, setTweet] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleTweet = () => {
    if (tweet.trim()) {
      onTweet(tweet, imageUrl);
      setTweet('');
      setImageUrl('');
    }
  };

  return (
    <div className="tweet-box">
      <div className="tweet-header">
        <span className="user-label">Déjanos un tweet:</span>
        <span className="user-name">Usuario:</span>
      </div>
      <textarea
        placeholder="¿Qué está pasando?"
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
      ></textarea>
      <div className="tweet-options">
        <button>📷</button>
        <button>🎥</button>
        <span className="image-url-label">Opcional: URL de la imagen/GIF</span>
        <input
          type="text"
          placeholder="https://example.com/image.jpg"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <button className="tweet-button" onClick={handleTweet}>Tweet</button>
    </div>
  );
}

export default TweetBox;