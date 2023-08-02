const Footer = () => {
    let hoje = new Date();

    return (
        <footer className="container">
            <div className="row justify-content-center mt-3 mb-4">
                <div className="col-8">
                    <h5>App de Alocação de Membros de um Time - {hoje.getFullYear()} </h5>
                </div>
            </div>
        </footer>
    )
}

export default Footer