import { useState } from "react";

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
    genero: `N/A`,
    time: `B`
  },
  {
    id: 3,
    nome: `Nome 3`,
    cargo: `Dev 3`,
    genero: `N/A`,
    time: `C`
  },
  {
    id: 4,
    nome: `Nome 4`,
    cargo: `Dev 4`,
    genero: `N/A`,
    time: `D`
  }
]


const Employees = () => {
    const [employees, setEmpoyees] = useState(employeesArr);
        

    return (
        <header>
            <h1>Footer</h1>
        </header>
    )
}

export default Employees