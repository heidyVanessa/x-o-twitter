import React from "react";

const Perfil = () => {
  return (
    <div className="perfil-container" style={{ background: "#000", color: "#fff", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ padding: "16px", borderBottom: "1px solid #222" }}>
        <span style={{ fontWeight: "bold", fontSize: "20px" }}>camilop</span>
        <span style={{ marginLeft: "8px", color: "#aaa" }}>2.638 posts</span>
      </div>

      {/* Banner & Avatar */}
      <div style={{ position: "relative", background: "#222", height: "120px" }}>
        <img
          src="https://via.placeholder.com/100"
          alt="Avatar"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            border: "4px solid #000",
            position: "absolute",
            left: "16px",
            bottom: "-60px"
          }}
        />
      </div>

      {/* Profile Info */}
      <div style={{ padding: "80px 16px 16px 16px" }}>
        <button style={{
          float: "right",
          border: "1px solid #fff",
          borderRadius: "24px",
          background: "transparent",
          color: "#fff",
          padding: "6px 18px",
          cursor: "pointer"
        }}>Editar perfil</button>
        <div style={{ fontWeight: "bold", fontSize: "20px" }}>camilop</div>
        <div style={{ color: "#aaa" }}>@lebraiann</div>
        <div style={{ color: "#aaa", margin: "8px 0" }}>
          <span>📍 Bogotá</span>
          <span style={{ marginLeft: "12px" }}>🗓️ Se unió el septiembre de 2022</span>
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>100</span> Siguiendo
          <span style={{ marginLeft: "16px", fontWeight: "bold" }}>24</span> Seguidores
        </div>
      </div>

      {/* Verification Banner */}
      <div style={{
        background: "#175b37",
        color: "#fff",
        margin: "16px",
        borderRadius: "16px",
        padding: "18px",
        display: "flex",
        alignItems: "center"
      }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: "bold", fontSize: "18px" }}>
            Todavía no tienes la verificación <span style={{ color: "#00ba7c" }}>✔️</span>
          </div>
          <div style={{ margin: "8px 0" }}>
            Obtén la verificación para acceder a respuestas priorizadas, estadísticas, navegación sin anuncios y mucho más. Actualiza tu perfil ahora.
          </div>
          <button style={{
            background: "#fff",
            color: "#175b37",
            border: "none",
            borderRadius: "24px",
            padding: "8px 20px",
            fontWeight: "bold",
            cursor: "pointer"
          }}>Consigue la verificación</button>
        </div>
        <button style={{
          background: "transparent",
          border: "none",
          color: "#fff",
          fontSize: "20px",
          marginLeft: "12px",
          cursor: "pointer"
        }}>×</button>
      </div>

      {/* Tabs */}
      <div style={{
        display: "flex",
        borderBottom: "1px solid #222",
        margin: "0 16px"
      }}>
        {["Posts", "Respuestas", "Destacados", "Artículos", "Multimedia", "Me gusta"].map(tab => (
          <div
            key={tab}
            style={{
              padding: "12px 16px",
              fontWeight: tab === "Posts" ? "bold" : "normal",
              borderBottom: tab === "Posts" ? "3px solid #1da1f2" : "none",
              cursor: "pointer"
            }}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Aquí puedes agregar los posts del usuario */}
      <div style={{ padding: "16px" }}>
        {/* Ejemplo de post */}
        <div style={{ borderBottom: "1px solid #222", padding: "12px 0" }}>
          <div style={{ fontWeight: "bold" }}>camilop <span style={{ color: "#aaa" }}>@lebraiann · 10 mar</span></div>
          <div>Este es un ejemplo de post fijado.</div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
