import Button from "react-bootstrap/Button"
import { useNavigate } from "react-router-dom";

function HeroComponent() {
    const navigate = useNavigate()

    return (
        <div className="text-center home-title p-4">
            <h2 >¡Bienvenide a TheVeganMarket!</h2>
            <p className="m-auto">La tienda vegana más divertida y sabrosa. Aquí encontrarás platos increíbles, postres tentadores y productos de primera calidad. ¡Únete a nosotros y disfruta de una experiencia vegana única y deliciosa!</p>
            <img className="d-block m-auto my-3" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-vegan-vegan-and-vegetarian-flaticons-lineal-color-flat-icons-5.png" alt="external-vegan-vegan-and-vegetarian-flaticons-lineal-color-flat-icons-5" />
            <Button className="ver-productos-button w-50" variant="light" onClick={() => navigate(`/productos`)}>Ver Productos</Button>
        </div>
    )
}
export default HeroComponent