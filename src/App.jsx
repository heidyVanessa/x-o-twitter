import React from 'react'
import Like from './componentes/like'
import Rt from './componentes/rt'

import './App.css'

function App() {
  return (
    <div className="layout">
      {/* Sidebar Izquierda */}
      <aside className="sidebar-left">
        <div className="logo">X</div>
        <nav className="menu">
          <a href="#">Inicio</a>
          <a href="#">Explorar</a>
          <a href="#">Notificaciones</a>
          <a href="#">Mensajes</a>
          <a href="#">Grok</a>
          <a href="#">Perfil</a>
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

      {/* Feed Central */}
      <main className="main-feed">
        <header className="feed-header">
          <span className="active-tab">Para ti</span>
          <span>Siguiendo</span>
        </header>
        <div className="tweet-box">
          <input className="tweet-input" placeholder="¿Qué está pasando?" />
          <button className="tweet-post-btn">Postear</button>
        </div>
        <div>
          
        </div>
        <div className="tweet">
          <div className="tweet-header">
            <span className="user-name">Usuario</span>
            <span className="user-handle">@usuario</span>
            <span className="tweet-time">· 1h</span>
          </div>
          <div className="tweet-content">
            
          </div>
          <div className="tweet-actions">
            <Like />
            <Rt />
          </div>
        </div>
      </main>

      {/* Sidebar Derecha */}
      <aside className="sidebar-right">
        <div className="premium-box">
          <h3>Suscríbete a Premium</h3>
          <p>Suscríbete para desbloquear nuevas funciones y, si eres elegible, recibir un pago de cuota de ingresos.</p>
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
  )
}

export default App
