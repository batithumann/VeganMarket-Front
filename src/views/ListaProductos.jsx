import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import ProductoCard from "../components/producto-components/ProductoCard";
// import productos from "../productos";
import "../styles/productCard.css";
import axios from "axios";

const ListaProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const urlServer = "http://localhost:4000";
        const endpoint = "/productos";

        const { data: productos } = await axios.get(urlServer + endpoint);
        setProductos(productos);
      } catch (error) {
        console.log({ error });
      }
    };
    obtenerProductos();
  }, []);

  return (
    <Container>
      <section className="lista-productos">
        {productos &&
          productos.map((producto) => {
            return <ProductoCard key={producto.id} producto={producto} />;
          })}
      </section>
    </Container>
  );
};

export default ListaProductos;
