import './assets/App.css';
import GlobalContextProvider from './context/GlobalContext';

import PaginaInicial from './routes/PaginaInicial';
import Entrar from './routes/Entrar';
import Registrar from './routes/Registrar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <main className='container'>
      <GlobalContextProvider>
        <Router>
          <Routes>
            <Route
              path='/'
              element={<PaginaInicial />}
            />
            <Route
              path='/entrar'
              element={<Entrar />}
            />
            <Route
              path='/registrar'
              element={<Registrar />}
            />
            <Route
              path='/*'
              element={<PaginaInicial />}
            />
          </Routes>
        </Router>
      </GlobalContextProvider>
    </main>
  );
}

export default App;
