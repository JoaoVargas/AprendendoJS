import avatar from '/home/jotausr/Projetos/Aprendendo-JS/3-Projetos/3.2-Team-Manager/src/Images/avatar.png'
import maleAvatar from '/home/jotausr/Projetos/Aprendendo-JS/3-Projetos/3.2-Team-Manager/src/Images/male_avatar.jpg'
import femaleAvatar from '/home/jotausr/Projetos/Aprendendo-JS/3-Projetos/3.2-Team-Manager/src/Images/female_avatar.jpg'

const Employees = ({employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange}) => {
    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-6">
                    <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
                        <option value="A">Time A</option>
                        <option value="B">Time B</option>
                        <option value="C">Time C</option>
                        <option value="D">Time D</option>
                    </select>
                </div>
            </div>
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <div className="card-collection">
                        {
                            employees.map((employee) => (
                                <div key={employee.id} id={employee.id} className={(employee.time === selectedTeam?'card m-2 standout' : 'card m-2')} style={{cursor: "pointer"}} onClick={handleEmployeeCardClick}>

                                    {(employee.genero === `N/A`)?<img src={avatar} alt="Avatar do employee" className="card-img-top" />
                                                                 :(employee.genero === `H`)?<img src={maleAvatar} alt="Avatar do employee" className="card-img-top" />
                                                                                            :<img src={femaleAvatar} alt="Avatar do employee" className="card-img-top" />}

                                    <div className="card-body">
                                        <h5 className="card-title">{employee.nome}</h5>
                                        <p className="card-text"><b>Cargo:</b> {employee.cargo} </p>
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