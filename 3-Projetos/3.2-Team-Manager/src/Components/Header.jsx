const Header = ({selectedTeam, teamMemberCount}) => {
    return (
        <header className="container">
            <div className="row justify-content-center mt-3 mb-4">
                <div className="col-8">
                    <h1>Alocação de Membros</h1>
                    <h3>Time {selectedTeam} possui {teamMemberCount} {teamMemberCount===1?` membro.`:` membros.`}</h3>
                </div>
            </div>
        </header>
    )
}

export default Header