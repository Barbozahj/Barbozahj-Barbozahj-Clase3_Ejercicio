import React from 'react';
import ProductDetail from '../src/Components/ProcdutDetail/ProductDetail';
import data from './data.json';

function App() {

  return (
    <div className="App">
      <h1>¡Descubre la fusión perfecta de estilo y funcionalidad con nuestro producto único!</h1>
      <ProductDetail data={data} />
    </div>
  );
}

export default App;

