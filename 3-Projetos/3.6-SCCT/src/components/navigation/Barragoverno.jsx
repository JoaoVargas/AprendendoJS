const Barragoverno = () => {

  return (
    <div>
      <div className=' bg-udesc-beige h-8 border-b-4 border-udesc-green flex justify-around text-udesc-gray text-sm'>
        <a
          className='place-self-center'
          href='http://www.transparencia.sc.gov.br/'
        >
          GOVERNO DE SANTA CATARINA
        </a>
        <a
          className='place-self-center'
          href='http://www.ouvidoria.sc.gov.br/'
        >
          Ovidoria
        </a>
        <a
          className='place-self-center'
          href='http://www.sc.gov.br/'
        >
          Portal da Transparencia
        </a>
        <div className="self-center bg-white pl-3 pr-24">
          Destaques:
        </div>
      </div>
    </div>
  );
};

export default Barragoverno;
