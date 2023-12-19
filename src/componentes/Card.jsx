import PropTypes from 'prop-types';
import Boton from './Boton';
import '../estilos-css/card.css';
import './carrusel/Carrusel'
 


function Card(props) {
const { id, nombreProducto, precio,imagen} = props;

  // Función para formatear el precio a una cadena con punto como separador de miles
  const formatPrecio = (amount) => {
    return `$${amount.toLocaleString()}`;
  };

  return (
    
    <div className="card">
    
      <p>{nombreProducto}</p>
      <img src={imagen} alt={`Consola ${nombreProducto}`} />
      <p>{formatPrecio(precio)}</p>
      <Boton id={id} />
      
    </div>
    
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  nombreProducto: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  imagen: PropTypes.string, // Ajusta el tipo según lo necesario
};

export default Card;
