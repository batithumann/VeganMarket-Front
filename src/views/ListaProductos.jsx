import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import ProductoCard from "../components/producto-components/ProductoCard";
// import productos from "../productos";
import "../styles/productCard.css";
import axios from "axios";
import { Spinner } from "react-bootstrap";

const ListaProductos = () => {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const urlServer = process.env.REACT_APP_BACKEND_URL;
        const endpoint = "/productos";

        const { data: productos } = await axios.get(urlServer + endpoint);
        setProductos(productos);
        setLoading(false);
      } catch (error) {
        console.log({ error });
      }
    };
    obtenerProductos();
  }, []);

  return (
    <Container>
      {loading ? (
        <Spinner animation="border" variant="success" />
      ) : (
        <section className="lista-productos">
          {productos &&
            productos.map((producto) => {
              return <ProductoCard key={producto.id} producto={producto} />;
            })}
        </section>
      )}
    </Container>
  );
};

export default ListaProductos;
