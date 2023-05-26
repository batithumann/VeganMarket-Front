import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import ProductoCard from "../components/producto-components/ProductoCard";
// import productos from "../productos";
import "../styles/productCard.css";
import "../styles/favoritosContainer.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Favoritos = () => {
  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
    const obtenerProductos = async () => {
      try {
        const urlServer = "http://localhost:4000";
        const endpoint = "/favoritos";

        const { data: productos } = await axios.get(urlServer + endpoint, {
          headers: { Authorization: "Bearer " + token },
        });
        setProductos(productos);
      } catch (error) {
        console.log({ error });
      }
    };
    obtenerProductos();
  }, []);

  return (
    <Container className="favoritos-container">
      <section className="lista-productos">
        {productos &&
          productos.map((producto) => {
            return <ProductoCard key={producto.id} producto={producto} />;
          })}
      </section>
    </Container>
  );
};

export default Favoritos;
