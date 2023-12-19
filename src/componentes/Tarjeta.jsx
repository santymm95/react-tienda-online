import '../estilos-css/recomendaciones.css'
import {avatar}  from '../imagenes/hombre.png'

// Definición del componente funcional
const Tarjeta = () => {
  const nombreUsuario = "Stiven Cordoba";
  const tiempoRecomendacion = "2 semanas";
 
  

  return (
    <div className='tarjeta'>
    
        <div className='perfil'>
            <img src={avatar} alt='foto-perfil'></img>
            <h2>{nombreUsuario} recomienda:</h2>
        </div>

      <p><strong>Tiempo de prueba:</strong> {tiempoRecomendacion}</p>
      <p>
        <strong>Por qué:</strong> 
        Tienen un catálogo de juegos increíble y precios muy competitivos. Los mejores en juegos digitales.
      </p>
      
    </div>
  );
};

// Exportar el componente para que pueda ser utilizado en otros archivos
export default Tarjeta;
