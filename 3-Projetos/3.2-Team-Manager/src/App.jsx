import * as React from 'react';
import './App.css';
import Header from "./Components/Header";
import Employees from './Components/Employees';
import Footer from './Components/Footer';


function App() {
    return (
        <div>
            <Header/>
            <Employees/>
            <Footer/>
        </div>
    );
}

export default App