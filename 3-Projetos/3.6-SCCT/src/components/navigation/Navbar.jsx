import { useState } from 'react';

const Navbar = () => {
  const [navMenuState, setNavMenuState] = useState(false);

  return (
    <div className='flex justify-between bg-udesc-white my-1 mx-10'>
      <div className='text-xs text-udesc-black place-self-center'>
        UNIVERSIDADE DO ESTADO DE SANTA CATARINA
      </div>
      <div>
        <div className='bg-udesc-gray-light px-32 py-3 border-0 rounded-full'></div>
      </div>
    </div>
  );
};

export default Navbar;
