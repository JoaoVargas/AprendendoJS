import { useState } from "react";

const RegistrarComponente = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const registrar = async (ev) => {
    ev.preventDefault()
    await fetch('http://localhost:4000/registrar', {
      method: 'POST',
      body: JSON.stringify({usuario,senha}) ,
      headers: {'Content-Type': 'application/json'}
    });
  }

  return (
    <form className='registrar' onSubmit={registrar}>
      <h1>Registre-se</h1>
      <input
        type='text'
        placeholder='Nome do usuário'
        value={usuario}
        onChange={(ev) => {
          setUsuario(ev.target.value);
        }}
      />
      <input
        type='password'
        placeholder='Senha'
        value={senha}
        onChange={(ev) => {
          setSenha(ev.target.value);
        }}
      />
      <button>Registrar</button>
    </form>
  );
};

export default RegistrarComponente;
