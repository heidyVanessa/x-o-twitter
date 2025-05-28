import { useState, useEffect } from 'react';
import { supabase } from '../../supabase/client';
import './style.css';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching posts:', error);
    } else {
      setPosts(data);
    }
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (newPost.trim() === '') return;

    const { data, error } = await supabase
      .from('posts')
      .insert([{ content: newPost }]);

    if (error) {
      console.error('Error creating post:', error);
    } else {
      setPosts([data[0], ...posts]);
      setNewPost('');
    }
  };

  const handleDeletePost = async (id) => {
    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting post:', error);
    } else {
      setPosts(posts.filter(post => post.id !== id));
    }
  };

  return (
    <div className="posts-container">
      <form onSubmit={handlePostSubmit}>
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="What's on your mind?"
        />
        <button type="submit">Post</button>
      </form>
      <div className="posts-list">
        {posts.map(post => (
          <div key={post.id} className="post">
            <p>{post.content}</p>
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;