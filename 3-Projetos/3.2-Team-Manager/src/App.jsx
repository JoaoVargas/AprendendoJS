import * as React from 'react';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css';
import Header from "./Components/Header";
import Employees from './Components/Employees';
import GroupedTeamMembers from './Components/GroupedTeamMembers';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import NotFound from './Components/NotFound';


function App() {
    const employeesArr = [{
        id: 1,
        nome: `Nome 1`,
        cargo: `Dev 1`,
        genero: `N/A`,
        time: `A`
      },
      {
        id: 2,
        nome: `Nome 2`,
        cargo: `Dev 2`,
        genero: `H`,
        time: `B`
      },
      {
        id: 3,
        nome: `Nome 3`,
        cargo: `Dev 3`,
        genero: `M`,
        time: `C`
      },
      {
        id: 4,
        nome: `Nome 4`,
        cargo: `Dev 4`,
        genero: `M`,
        time: `D`
      }
    ]

    const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem(`employeeList`)) || employeesArr);

    const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem(`selectedTeam`)) || `A`);

    useEffect(() => {
            localStorage.setItem(`employeeList`, JSON.stringify(employees));
    }, [employees]);

    useEffect(() => {
            localStorage.setItem(`selectedTeam`, JSON.stringify(selectedTeam));
    }, [selectedTeam]);

    function handleTeamSelectionChange(event){
        setTeam(event.target.value);
    }

    function handleEmployeeCardClick(event){
        const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
                                                                ?(employee.time === selectedTeam)?{...employee, time:''}
                                                                    :{...employee, time: selectedTeam}
                                                                :employee);
        
        setEmployees(transformedEmployees);
    }


    return (
        <div>
            <Router>
                <Nav />
                <Header selectedTeam={selectedTeam}
                        teamMemberCount={employees.filter((employee) => employee.time === selectedTeam).length}
                        />

                <Routes>
                    <Route path="/" 
                        element={<Employees employees={employees}
                                    selectedTeam={selectedTeam} 
                                    handleEmployeeCardClick={handleEmployeeCardClick}
                                    handleTeamSelectionChange={handleTeamSelectionChange}
                                    />}>
                    </Route>

                    <Route path="/GroupedTeamMembers" 
                        element={<GroupedTeamMembers employees={employees} 
                                    selectedTeam={selectedTeam} 
                                    setTeam={setTeam}
                                    />}>
                    </Route>

                    <Route path="*" 
                        element={<NotFound />}>
                    </Route>
                </Routes>

                <Footer/>
            </Router>
        </div>
    );
}

export default App