const TeamSelector = ({selectedTeam, handleTeamSelectionChange}) => {
    return(
        <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
            <option value="A">Time A</option>
            <option value="B">Time B</option>
            <option value="C">Time C</option>
            <option value="D">Time D</option>
        </select>
    )
}

export default TeamSelector