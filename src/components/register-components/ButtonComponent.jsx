import React from "react"
import Swal from "sweetalert2";

function ButtonComponent({ buttonState }) {

    function successMesagge() {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Succesfull login',
            showConfirmButton: false,
            timer: 2000
        }).then(function () {
            window.open("http://localhost:3000/productos", "_blank")
        })
    }

    return (
        <React.Fragment>
            <button onClick={successMesagge} className="px-5 py-2 mb-2 mt-3 rounded login-button">Registrarme</button>
        </React.Fragment>
    )
}

export default ButtonComponent