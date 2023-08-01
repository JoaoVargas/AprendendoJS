import { useState } from "react";
import avatar from '/home/jotausr/Projetos/Aprendendo-JS/3-Projetos/3.2-Team-Manager/src/Images/avatar.png'
import maleAvatar from '/home/jotausr/Projetos/Aprendendo-JS/3-Projetos/3.2-Team-Manager/src/Images/male_avatar.jpg'
import femaleAvatar from '/home/jotausr/Projetos/Aprendendo-JS/3-Projetos/3.2-Team-Manager/src/Images/female_avatar.jpg'

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


const Employees = () => {
    const [employees, setEmployees] = useState(employeesArr);

    const [selectedTeam, setTeam] = useState(`A`);

    function handleTeamSelectionChange(event){
        console.log(event.target.value);
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
        <main className="container">
            <div class="row justify-content-center mt-3 mb-3">
                <div class="col-6">
                    <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
                        <option value="A">Time A</option>
                        <option value="B">Time B</option>
                        <option value="C">Time C</option>
                        <option value="D">Time D</option>
                    </select>
                </div>
            </div>
            <div class="row justify-content-center mt-3 mb-3">
                <div class="col-8">
                    <div class="card-collection">
                        {
                            employees.map((employees) => (
                                <div id={employees.id} className={(employees.time === selectedTeam?'card m-2 standout' : 'card m-2')} style={{cursor: "pointer"}} onClick={handleEmployeeCardClick}>

                                    {(employees.genero === `N/A`)?<img src={avatar} alt="Avatar do employee" className="card-img-top" />
                                                                 :(employees.genero === `H`)?<img src={maleAvatar} alt="Avatar do employee" className="card-img-top" />
                                                                                            :<img src={femaleAvatar} alt="Avatar do employee" className="card-img-top" />}

                                    <div className="card-body">
                                        <h5 className="card-title">{employees.nome}</h5>
                                        <p className="card-text"><b>Cargo:</b> {employees.cargo} </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Employees