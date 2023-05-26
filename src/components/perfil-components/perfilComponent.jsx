import React from 'react'

function PerfilComponent({nombre, imagen, email, id}) {



    return (
        <div className="perfil-container">
            <div className="user-data-container">
                <img className="rounded-circle" src={imagen} alt={`foto de perfil de ${nombre}`} srcSet={imagen} />
                <p className="h3">{nombre}</p>
                <p className="h3">{email}</p>
            </div>
        </div>
    )
}

export default PerfilComponent