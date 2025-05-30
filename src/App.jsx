import React, { useState } from 'react'; // Import useState here
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Like from './componentes/like';
import Rt from './componentes/rt';
import TweetBox from './componentes/posts/hacer';
import PostFeed from './componentes/posts/ver';
import Perfil from './componentes/perfil';

import './App.css';

function App() {
  const [posts, setPosts] = useState([{ user: 'Test', handle: '@test', timestamp: new Date().toLocaleString(), text: 'Test post', likes: 0 }]);

  const handleTweet = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <Router>
      <div className="layout">
        {/* Sidebar Izquierda */}
        <aside className="sidebar-left">
          <div className="logo">X</div>
          <nav className="menu">
            <Link to="/">Inicio</Link>
            <a href="#">Explorar</a>
            <a href="#">Notificaciones</a>
            <a href="#">Mensajes</a>
            <a href="#">Grok</a>
            <Link to="/perfil">Perfil</Link>
            <a href="#">Más opciones</a>
          </nav>
          <button className="post-btn">Postear</button>
          <div className="user-info">
            <span className="user-avatar"></span>
            <div>
              <div className="user-name">camilop</div>
              <div className="user-handle">@lebraiann</div>
            </div>
          </div>
        </aside>

        {/* Feed Central con Routing */}
        <main className="main-feed">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <header className="feed-header">
                    <span className="active-tab">Para ti</span>
                    <span>Siguiendo</span>
                  </header>
                  <TweetBox onTweet={handleTweet} />
                  <div>
                    <PostFeed posts={posts} />
                  </div>
                </>
              }
            />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
        </main>

        {/* Sidebar Derecha */}
        <aside className="sidebar-right">
          <div className="premium-box">
            <h3>Suscríbete a Premium</h3>
            <p>
              Suscríbete para desbloquear nuevas funciones y, si eres elegible, recibir un pago de cuota de ingresos.
            </p>
            <button className="subscribe-btn">Suscribirse</button>
          </div>
          <div className="trends-box">
            <h4>Qué está pasando</h4>
            <ul>
              <li>
                <span>Deportes · Tendencia</span>
                <strong>Campin</strong>
                <span>5.566 publicaciones</span>
              </li>
              <li>
                <span>Política · Tendencia</span>
                <strong>Kicillof</strong>
                <span>22,9 mil publicaciones</span>
              </li>
              <li>
                <span>Tendencia en Colombia</span>
                <strong>#LaCasaDelosFamosoCol</strong>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </Router>
  );
}

export default App;