const Post = () => {
  return (
    <div className='post'>
      <div className='imagem'>
        <img
          src='https://s2-g1.glbimg.com/fR3-CeJCzjc57dJ5Bw3TH37CeNA=/0x0:1280x854/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/d/l/UbgM9iS7mthd999LsSbg/821dfc6c-647b-457c-840d-2bdafc77859e.jpg'
          alt=''
        />
      </div>
      <div className='texto'>
        <h2>Titulo bla bla</h2>
        <p className='info'>
          <a className='autor'>Autor</a>
          <time>13/08/2023 14h07</time>
        </p>
        <p className='resumo'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam in
          voluptatum modi eius eum ipsam debitis molestias asperiores aliquid
          quos earum incidunt explicabo impedit, fuga voluptatibus autem?
          Placeat, soluta explicabo?
        </p>
      </div>
    </div>
  );
};

export default Post;
