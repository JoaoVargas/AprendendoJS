import { useState } from "react"

const GroupedTeamMembers = ({employees, selectedTeam, setTeam}) => {
    const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

    function groupTeamMembers(){
        var teams = [];

        var teamAMembers = employees.filter((employee) => employee.time === `A`);
        var timeA = {time: `A`, members: teamAMembers, collapsed: selectedTeam === `A`?false:true}
        teams.push(timeA);

        var teamBMembers = employees.filter((employee) => employee.time === `B`);
        var timeB = {time: `B`, members: teamBMembers, collapsed: selectedTeam === `B`?false:true}
        teams.push(timeB);

        var teamCMembers = employees.filter((employee) => employee.time === `C`);
        var timeC = {time: `C`, members: teamCMembers, collapsed: selectedTeam === `C`?false:true}
        teams.push(timeC);

        var teamDMembers = employees.filter((employee) => employee.time === `D`);
        var timeD = {time: `D`, members: teamDMembers, collapsed: selectedTeam === `D`?false:true}
        teams.push(timeD);

        return teams;
    }
    
    function handleTeamClick(time){
        var transformedGroupData = groupedEmployees.map((groupedData) => groupedData.time === time
                                                                    ?{...groupedData, collapsed:!groupedData.collapsed}
                                                                    :groupedData);
        setGroupedData(transformedGroupData);
        setTeam(time);
    }



    return (
        <main className="container">
            {
                groupedEmployees.map((item) => {
                    return (
                        <div key={item.time} className="card mt-2" style={{cursor: "pointer"}}>
                            <h4 id={item.time} className="card-header text-secondary bg-white" onClick={() => handleTeamClick(item.time)}>
                                Time: {item.time}
                            </h4>
                            <div id={"collapse_" + item.time}
                                className={item.collapsed === true?"collapse":""}>
                                        {
                                            item.members.map(member => {
                                                return (
                                                    <div className="mt-2">
                                                        <h5 className="card-title mt2">
                                                            <span className="text-dark">{member.nome}</span>
                                                            <p>Cargo: {member.cargo}</p>
                                                        </h5>
                                                    </div>
                                                )
                                            })
                                        }
                            </div>
                        </div>
                    )
                })
            }
        </main>
    )
}

export default GroupedTeamMembers