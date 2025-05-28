import { useState } from 'react';

function PostFeed() {
  return (
    <div className="post-feed">
      {posts.map((post, index) => (
        <div key={index} className="post">
          <div className="user-info">
            <span className="user-name">{post.user}</span>
            <span className="user-handle">{post.handle}</span>
            <span className="timestamp">{post.timestamp}</span>
          </div>
          <p>{post.text}</p>
          {post.image && <img src={post.image} alt="post" />}
          {post.link && <a href={post.link}>Link</a>}
          <div className="post-actions">
            <span>❤️ {post.likes}</span>
            <span>💬 Reply</span>
            <span>🔗 Copy Link</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostFeed;