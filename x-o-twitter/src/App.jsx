import React from 'react';
import Rt from './componentes/rt/index';
import Likes from './componentes/likes/index';
import Posts from './componentes/posts/index';
import Auth from './componentes/auth/index';

function App() {
  return (
    <div className="App">
      <Auth />
      <Posts />
      <Likes />
      <Rt />
    </div>
  );
}

export default App;