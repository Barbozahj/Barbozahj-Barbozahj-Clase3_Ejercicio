import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './ProductDetail.css';

import moto1 from '../img/moto1.png';

const data = {
  "titulo": "Motorola G84 5G GOLD",
  "modelo": "Moto G84 5G",
  "camara": {
    "resolucion": "50 MP",
    "tecnologia": "Ultra Pixel",
    "estabilizacion": "OIS",
    "sensores": ["Ultra Gran Angular", "Macro", "de Profundidad"]
  },
  "conectividad": "5G",
  "pantalla": {
    "resolucion": "Alta",
    "calidad": "Nítida"
  },
  "procesador": "Potente",
  "bateria": "Larga duración",
  "almacenamiento": "Ampliable",
  "descripcion": "El Motorola G84 5G GOLD es un teléfono inteligente potente y versátil. Cuenta con una cámara de 50 MP con tecnología Ultra Pixel y estabilización OIS. Además, tiene sensores de Ultra Gran Angular, Macro y de Profundidad. La conectividad 5G te permite disfrutar de velocidades de descarga y carga rápidas. La pantalla de alta resolución y calidad nítida ofrece una experiencia visual impresionante. Con su procesador potente, podrás ejecutar aplicaciones y juegos sin problemas. La batería de larga duración te mantendrá conectado durante todo el día, y el almacenamiento ampliable te permite guardar todos tus archivos y multimedia sin preocupaciones. No te pierdas de capturar momentos especiales con las imágenes de alta calidad que puedes tomar con este teléfono. ¡El Motorola G84 5G GOLD es la elección perfecta para aquellos que buscan un teléfono de calidad y rendimiento excepcionales!"
};

function ProductDetail() {
  return (
    <Container className="product-detail-container">
      <Card className="mb-3">
        <Row>
        <Col md={6}>
            <img
              src={moto1}
              className="img-fluid rounded-start"
              alt="Imagen del producto"
            />
          </Col>

          <Col md={6}>
            <div className="card-body">
              <h5 className="card-title">{data.titulo}</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Modelo: {data.modelo}</li>
                <li className="list-group-item">Cámara: {data.camara.resolucion}, {data.camara.tecnologia}, {data.camara.estabilizacion}</li>
                <li className="list-group-item">Conectividad: {data.conectividad}</li>
                <li className="list-group-item">Pantalla: {data.pantalla.resolucion}, {data.pantalla.calidad}</li>
                <li className="list-group-item">Procesador: {data.procesador}</li>
                <li className="list-group-item">Batería: {data.bateria}</li>
                <li className="list-group-item">Almacenamiento: {data.almacenamiento}</li>
              </ul>
              <p className="card-text">Precio: $349.999</p>
              <p className="card-text">Medios de pago: Tarjeta de crédito, transferencia bancaria</p>
            </div>
          </Col>
          
        </Row>
      </Card>
    </Container>
  );
}

export default ProductDetail;