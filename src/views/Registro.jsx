import { useState } from "react";
import Swal from "sweetalert2";
import Form from "react-bootstrap/Form";
import TitleComponent from "../components/login-register-components/TitleComponent";
import LinksComponent from "../components/login-register-components/LinksComponent";
import "../styles/registerCard.css";
import { Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Context from "../Context";
import { useContext } from "react";

function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    nombre: "",
    email: "",
    password: "",
    passwordRepeat: "",
  });

  const handleChange = (event) => {
    const valor = event.target.value;
    setUser({ ...user, [event.target.name]: valor });
  };

  function successMesagge() {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Succesfull login",
      showConfirmButton: false,
      timer: 2000,
    }).then(function () {
      window.open("http://localhost:3000/productos", "_blank");
    });
  }

  const register = async () => {
    const urlServer = "http://localhost:4000";
    const endpoint = "/usuario";
    if (user.password === user.passwordRepeat) {
      try {
        await axios.post(urlServer + endpoint, user);
        let timerInterval
        Swal.fire({
          title: 'Registro exitoso!',
          html: ' ',
          icon: 'success',
          timer: 1500,
          didOpen: () => {
            Swal.showLoading()
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            navigate("/login");
          }
        })
        
      } catch (error) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Algo salió mal...",
          showConfirmButton: true,
          timer: 2000,
        });
      }
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Contraseña no coincide",
        showConfirmButton: true,
        timer: 2000,
      });
    }
  };

  return (
    <div className="register">
      <div className="register-container p-4">
        <TitleComponent />
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            value={user.nombre}
            type="text"
            name="nombre"
            placeholder="fulanito123"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>email</Form.Label>
          <Form.Control
            value={user.email}
            type="email"
            name="email"
            placeholder="fulanito123"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            value={user.password}
            type="password"
            name="password"
            placeholder="fulanito123"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Repita contraseña</Form.Label>
          <Form.Control
            value={user.passwordRepeat}
            type="password"
            name="passwordRepeat"
            placeholder="fulanito123"
            onChange={(e) => handleChange(e)}
          />
          {user.password !== user.passwordRepeat ? (
            <Alert style={{ marginTop: "1em" }} variant="danger">
              Tu contraseña no coincide
            </Alert>
          ) : (
            <></>
          )}
        </Form.Group>
        <button
          onClick={register}
          className="px-5 py-2 mb-2 mt-3 rounded login-button"
        >
          Registrarme
        </button>
      </div>
      <LinksComponent />
    </div>
  );
}

export default Register;
