 
 
import './App.css';
import Card from './componentes/Card';
import Buscador from './componentes/Buscador.jsx';
import ps4 from './imagenes/ps4.png';
import ps2 from './imagenes/consola-ps2.png';
import xbox from './imagenes/consola-360.jpg';


const products = [
  { id: 1, category: 'Playstation', name: 'PS4 Slim', price: '800.000', image: ps4 },
  { id: 2, category: 'Playstation', name: 'PS4 PRO', price: '1.200.000', image: ps2 },
  { id: 3, category: 'Playstation', name: 'PS3 Slim', price: '380.000', image: xbox },
  { id: 4, category: 'Playstation', name: 'PS2', price: '200.000', image: ps2 },
  { id: 5, category: 'Playstation', name: 'PS4 Slim', price: '800.000', image: ps4 },
  { id: 6, category: 'Playstation', name: 'PS4 PRO', price: '1.200.000', image: ps2 },
  { id: 7, category: 'Playstation', name: 'PS3 Slim', price: '380.000', image: xbox },
  { id: 8, category: 'Playstation', name: 'Another PS2', price: '200.000', image: ps2 },
  // Add more products as needed
  { id: 9, category: 'Xbox', name: 'XBOX SERIE X', price: '800.000', image: ps4 },
  { id: 10, category: 'Xbox', name: 'XBOX SERIE S', price: '1.200.000', image: ps2 },
  { id: 11, category: 'Xbox', name: 'XBOX 360 Slim', price: '380.000', image: xbox },
  { id: 12, category: 'Xbox', name: 'XBOX 360 X', price: '200.000', image: ps4 },
  { id: 13, category: 'Xbox', name: 'XBOX SERIE X', price: '800.000', image: ps4 },
  { id: 14, category: 'Xbox', name: 'XBOX SERIE S', price: '1.200.000', image: ps2 },
  { id: 15, category: 'Xbox', name: 'XBOX 360 Slim', price: '380.000', image: xbox },
  { id: 16, category: 'Xbox', name: 'XBOX 360 X', price: '200.000', image: ps4 },
  // Add more products as needed
  { id: 17, category: 'Nintendo', name: 'NINTENDO SWITCH', price: '800.000', image: ps4 },
  { id: 18, category: 'Nintendo', name: 'NINTENDO 64', price: '1.200.000', image: ps2 },
  { id: 19, category: 'Nintendo', name: 'DREAM CASH', price: '380.000', image: xbox },
  { id: 20, category: 'Nintendo', name: 'Another XBOX 360 X', price: '200.000', image: ps2 },
  { id: 21, category: 'Nintendo', name: 'MANDOS XBOX', price: '800.000', image: ps4 },
  { id: 22, category: 'Nintendo', name: 'Another XBOX', price: '1.200.000', image: ps2 },
  { id: 23, category: 'Nintendo', name: 'Another XBOX 360', price: '380.000', image: xbox },
  { id: 24, category: 'Nintendo', name: 'CABLE XBOX', price: '200.000', image: ps2 },
];

function App() {
  const renderCards = (category) => {
    const filteredProducts = products.filter(product => product.category === category);

    return (
      <div className="cards">
       
        {filteredProducts.map(product => (
          <Card
            key={product.id}
            id={product.id}
            nombreProducto={product.name}
            precio={product.price}
            imagen={product.image}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="App">
    <Buscador/>
      <h2>Playstation</h2>
      {renderCards('Playstation')}

      <h2>Xbox</h2>
      {renderCards('Xbox')}

      <h2>Nintendo</h2>
      {renderCards('Nintendo')}
    </div>
  );
}

export default App;
