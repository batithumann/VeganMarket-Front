import { Container, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DetalleProducto from "../components/detalleProductos-components/DetalleProducto";
import "../styles/productDetails.css";
import axios from "axios";

const Producto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({});

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const urlServer = process.env.REACT_APP_BACKEND_URL;
        const endpoint = "/productos/";

        const { data: producto } = await axios.get(urlServer + endpoint + id);
        setDetails(producto);
        setLoading(false);
      } catch (error) {
        console.log({ error });
        navigate("/");
      }
    };
    obtenerProducto();
  }, [id, navigate]);

  return (
    <div className="detalle-producto-container">
      <Container>
        {loading ? (
          <Spinner animation="border" variant="success" />
        ) : (
          <section>
            <DetalleProducto producto={details} />
          </section>
        )}
      </Container>
    </div>
  );
};

export default Producto;
