import avatar from '../imagenes/hombre.png';
import facebook from '../imagenes/imagenes-redes/facebook.png';
import '../estilos-css/testimonios.css';

function Testimonios() {
  const testimonios = [
    {
      nombreUsuario: 'Stiven Cordoba',
      tiempoRecomendacion: '2 semanas',
      calificacion: '⭐⭐⭐⭐⭐',
      opinion: 'Si eres un apasionado de los videojuegos, definitivamente deberías comprar aquí. ¡No te decepcionará! 👍',
    },
    {
      nombreUsuario: 'Andres Garcia',
      tiempoRecomendacion: '2 meses',
      calificacion: '⭐⭐⭐⭐⭐',
      opinion: 'Otra opinión interesante sobre la plataforma. ¡Recomendado! 👌',
    },
    {
      nombreUsuario: 'Santiago Montoya',
      tiempoRecomendacion: '3 meses',
      calificacion: '⭐⭐⭐⭐⭐',
      opinion: 'Otra opinión interesante sobre la plataforma. ¡Recomendado! 👌',
    },
    
  ];

  return (
    <div className='contenedor-testimonios'>
      {testimonios.map((testimonio, index) => (
        <div key={index} className="card-testimonios">
          <div className="avatar">
            <img className="foto-avatar" src={avatar} alt="Avatar de usuario" />
            <h6>{testimonio.nombreUsuario}</h6>
            <img className="foto-avatar" src={facebook} alt="Ícono de Facebook" />
          </div>
          <div className="textos-opiniones">
            <p>@{testimonio.nombreUsuario.replace(/\s+/g, '_')}</p>
            <p>🕒 {testimonio.tiempoRecomendacion}</p>
          </div>
          <p>Calificación {testimonio.calificacion}</p>
          <p className='opinion'>{testimonio.opinion}</p>
        </div>
      ))}
    </div>
  );
}

export default Testimonios;
