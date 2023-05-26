import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Context from "../../Context";
import { useContext } from "react";

function ButtonComponent({ buttonState }) {
  const navigate = useNavigate();
  const { setUsuario } = useContext(Context);

  function successMesagge() {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Succesfull login",
      showConfirmButton: false,
      timer: 2000,
    }).then(function () {
      setUsuario({
        nombre: "usuario",
        email: "email@correo.com",
      });
      navigate("/productos");
      //   window.open("http://localhost:3000/productos", "_blank");
    });
  }

  return (
    <React.Fragment>
      <button
        onClick={successMesagge}
        className="px-5 py-2 mb-2 mt-3 rounded login-button"
      >
        login
      </button>
    </React.Fragment>
  );
}

export default ButtonComponent;
