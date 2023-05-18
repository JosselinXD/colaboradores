
const Nav = ({onSearchChange}) => {
    const handleSearchChange = (e) => {
       onSearchChange(e.target.value);
       console.log(e.target.value);
    }
    return (
        <nav className="navbar navbar-default bg-body-tertiary navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-withe">Buscador de colaboradores</a>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="busca un colaborador" aria-label="Search" onChange={handleSearchChange}/>
                </form>
            </div>
        </nav>
    );
}

export default Nav;