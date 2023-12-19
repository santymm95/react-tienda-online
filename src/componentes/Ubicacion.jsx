 
import '../estilos-css/ubicacion.css';

function Ubicacion() {
  return (
    <div className="ubicacion">
    <h2>Encuentranos en el mapa</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.117653198663!2d-75.57453047656921!3d6.248223793740182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44285576f0220f%3A0x1c8adf198d7aa57c!2sEl%20Hueco%20Pichincha!5e0!3m2!1ses-419!2sco!4v1703001301289!5m2!1ses-419!2sco"
        width="400"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Ubicacion;
