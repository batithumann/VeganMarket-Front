import axios from "axios";
import { useState, useEffect } from "react";
import PerfilComponent from "../components/perfil-components/perfilComponent"
import "../styles/perfilContainer.css"
import { Spinner } from "react-bootstrap";

function Perfil() {

    const token = localStorage.getItem("token");
    const [usuario , setUsuario] = useState({});
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const obtenerFavoritos = async () => {
            try {
                const urlServer = "http://localhost:4000";
                const endpoint = "/usuario";

                const { data } = await axios.get(urlServer + endpoint, {
                    headers: { Authorization: "Bearer " + token },
                });
                setUsuario(data);
            } catch (error) {
                console.log({ error });
            }
        };
        if (token) {
            obtenerFavoritos();
        }

        setLoading(false);
    }, [token]);

    return (
        <div>
            {
                loading ? <Spinner animation="border" variant="success"/> : <PerfilComponent nombre={usuario.nombre} imagen={`https://placedog.net/50${usuario.id}`} email={usuario.email}/>
            }
        </div>
    )
}

export default Perfil