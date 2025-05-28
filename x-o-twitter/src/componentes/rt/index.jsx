import { useState } from 'react'
import { supabase } from '../../supabase/client'
import './style.css'

function Rt() {
  const [retweeted, setRetweeted] = useState(false)
  const [count, setCount] = useState(0)

  const handleRetweet = async () => {
    const newRetweetedState = !retweeted;
    setRetweeted(newRetweetedState);
    setCount(prev => newRetweetedState ? prev + 1 : prev - 1);

    const { user } = await supabase.auth.getUser();
    if (user) {
      const { data, error } = await supabase
        .from('retweets')
        .upsert({ user_id: user.id, post_id: 'your_post_id', retweeted: newRetweetedState });

      if (error) {
        console.error('Error updating retweet:', error);
      }
    }
  }

  return (
    <button className={`rt-btn ${retweeted ? 'retweeted' : ''}`} onClick={handleRetweet}>
      <svg
        className="rt-icon"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill={retweeted ? "#00BA7C" : "none"}
        stroke="#00BA7C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="17 1 21 5 17 9"/>
        <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
        <polyline points="7 23 3 19 7 15"/>
        <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
      </svg>
      <span className="rt-count">{count > 0 ? count : ''}</span>
    </button>
  )
}

export default Rt