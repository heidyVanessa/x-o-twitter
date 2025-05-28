import { useState } from 'react'
import './style.css'

function Like() {
  const [liked, setLiked] = useState(false)
  const [count, setCount] = useState(0)

  const handleLike = () => {
    setLiked(!liked)
    setCount(prev => liked ? prev - 1 : prev + 1)
  }

  return (
    <button className={`like-btn ${liked ? 'liked' : ''}`} onClick={handleLike}>
      <svg
        className="like-icon"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill={liked ? "#F91880" : "none"}
        stroke="#F91880"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
      <span className="like-count">{count > 0 ? count : ''}</span>
    </button>
  )
}

export default Like