import '../estilos-css/buscador.css'

function Buscador() {
  return (
    <div className="buscador">
      <div className="container pt-4">
        <div className="justify-content-center">
            <form className="d-flex">
              <input
                className="form-control m-1 "
                type="search"
                placeholder="Buscar..."
                aria-label="Search"
              />
              <button className="btns-6 m-1" type="submit">
                Buscar
              </button>
            </form>
          
        </div>
      </div>
    </div>
  );
}

export default Buscador;
