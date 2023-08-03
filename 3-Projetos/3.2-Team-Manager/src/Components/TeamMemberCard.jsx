import avatar from '/home/jotausr/Projetos/Aprendendo-JS/3-Projetos/3.2-Team-Manager/src/Images/avatar.png'
import maleAvatar from '/home/jotausr/Projetos/Aprendendo-JS/3-Projetos/3.2-Team-Manager/src/Images/male_avatar.jpg'
import femaleAvatar from '/home/jotausr/Projetos/Aprendendo-JS/3-Projetos/3.2-Team-Manager/src/Images/female_avatar.jpg'

const TeamMemberCard = ({employee, handleEmployeeCardClick, selectedTeam}) => {
    return (
        <div key={employee.id} 
            id={employee.id} 
            className={(employee.time === selectedTeam?'card m-2 standout' : 'card m-2')} 
            style={{cursor: "pointer"}} 
            onClick={handleEmployeeCardClick}>
            {(employee.genero === `N/A`)?<img src={avatar} alt="Avatar do employee" className="card-img-top" />
                                        :(employee.genero === `H`)?<img src={maleAvatar} alt="Avatar do employee" className="card-img-top" />
                                                                    :<img src={femaleAvatar} alt="Avatar do employee" className="card-img-top" />}

            <div className="card-body">
                <h5 className="card-title">{employee.nome}</h5>
                <p className="card-text"><b>Cargo:</b> {employee.cargo} </p>
            </div>
        </div>
    )
}

export default TeamMemberCard