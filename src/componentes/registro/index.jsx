import { useState } from 'react';
import { supabase } from '../../supabase';
import { useNavigate } from 'react-router-dom';

function Registro() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    correo: '',
    password: '',
    fechaNacimiento: '',
    telefono: ''
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleRegistro = async (e) => {
    e.preventDefault();
    setError(null);

    const { data, error: errorAuth } = await supabase.auth.signUp({
      email: formulario.correo,
      password: formulario.password,
    });

    if (errorAuth) {
      setError(errorAuth.message);
      return;
    }

    const uid = data.user.id;

    const { error: errorInsert } = await supabase.from('usuario').insert([
      {
        id: uid,
        nombre: formulario.nombre,
        correo: formulario.correo,
        telefono: formulario.telefono,
        fecha_nacimiento: formulario.fechaNacimiento,
      },
    ]);

    if (errorInsert) {
      setError("Usuario creado pero error en tabla usuarios: " + errorInsert.message);
    } else {
      navigate("/login");
    }
  };

  return (
    <section>
      <h2>Crea tu cuenta</h2>
      <form onSubmit={handleRegistro}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formulario.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="correo"
          placeholder="Correo"
          value={formulario.correo}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formulario.password}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          value={formulario.telefono}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="fechaNacimiento"
          value={formulario.fechaNacimiento}
          onChange={handleChange}
          required
        />
        <button type="submit">Registrarse</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={() => navigate('/login')}>Ya tengo cuenta</button>
    </section>
  );
}

export default Registro;
