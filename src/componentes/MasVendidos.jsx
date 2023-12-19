import '../estilos-css/masvendidos.css'


const MasVendidos = () => (
  <div className="mas-vendidos">
    <h2>Lo más vendido</h2>
    <div className="lista-productos">
      {[
        { id: 1, nombre: 'Producto 1', precio: 19.99,  },
        { id: 2, nombre: 'Producto 2', precio: 29.99,  },
        { id: 3, nombre: 'Producto 3', precio: 19.99,  },
        { id: 4, nombre: 'Producto 4', precio: 29.99,   },
        // Agrega más productos según sea necesario
      ].map((producto) => (
        <div key={producto.id} className="producto">
          
          {/* Puedes agregar más detalles o acciones según sea necesario */}
        </div>
      ))}
    </div>
  </div>
);

export default MasVendidos;
