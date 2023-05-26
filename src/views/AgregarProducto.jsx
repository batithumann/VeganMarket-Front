import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/agregarContainer.css"

const AgregarProducto = () => {
  const navigate = useNavigate();
  const [producto, setProducto] = useState({
    nombre: "",
    descripcion: "",
    url_imagen: "",
    precio: 0,
    stock: 1,
    categoria: "",
  });
  const token = localStorage.getItem("token");

  useEffect(() => { }, []);

  const handleChange = (event) => {
    const valor = event.target.value;
    setProducto({ ...producto, [event.target.name]: valor });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!token) navigate("/");
    try {
      const urlServer = "http://localhost:4000";
      const endpoint = "/productos";

      await axios.post(urlServer + endpoint, producto, {
        headers: { Authorization: "Bearer " + token },
      });
    } catch (error) {
      console.log({ error });
    }
    navigate("/productos");
  };

  return (
    <Container style={{ paddingTop: "2em", paddingBottom: "5em" }}>
      <div className="agregar-container">
        <Form >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              name="nombre"
              type="text"
              placeholder="Nombre producto"
              onChange={handleChange}
              value={producto.nombre}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              name="descripcion"
              as="textarea"
              placeholder="Descripción del producto"
              style={{ height: "100px" }}
              value={producto.descripcion}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              name="url_imagen"
              type="text"
              placeholder="URL de una imagen del producto"
              onChange={handleChange}
              value={producto.url_imagen}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              name="precio"
              type="number"
              min={0}
              onChange={handleChange}
              value={producto.precio}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Cantidad</Form.Label>
            <Form.Control
              name="stock"
              type="number"
              min={1}
              onChange={handleChange}
              value={producto.stock}
            />
          </Form.Group>

          <Button
            variant="warning"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Enviar
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default AgregarProducto;
