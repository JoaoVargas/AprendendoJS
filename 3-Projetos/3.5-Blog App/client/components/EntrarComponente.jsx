const LoginComponente = () => {
  return (
    <form className="entrar">
      <h1>Entrar na conta</h1>
      <input
        type='text'
        placeholder='Nome do usuário'
      />
      <input
        type='password'
        placeholder='Senha'
      />
      <button>Entrar</button>
    </form>
  );
};

export default LoginComponente;
