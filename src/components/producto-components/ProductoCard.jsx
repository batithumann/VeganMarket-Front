import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProductoCard({ producto }) {
  const navigate = useNavigate();

  return (
    <Card className="card-container" style={{ width: "16rem" }}>
      <div
        className="card-img"
        style={{
          backgroundImage: `url(${producto.url_imagen})`,
          backgroundSize: "cover",
        }}
        onClick={() => navigate(`/productos/${producto.id}`)}
      ></div>
      <div className="product-card-info">
        <Card.Body className="card-body-container">
          <Card.Title className="producto-nombre" onClick={() => navigate(`/productos/${producto.id}`)}>
            {producto.nombre}
          </Card.Title>
          <p className="price">{producto.precio.toLocaleString("de")}</p>
        </Card.Body>
        <div className="agregar-carrito-container">
          <Button
            className="agregar-button"
            //  onClick={handleAddToCart}
          >
            <FontAwesomeIcon className="carrito-icon" icon={faCartPlus} />
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default ProductoCard;
