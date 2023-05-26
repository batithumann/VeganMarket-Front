import React from 'react'

function AboutCardComponent({ nombre, imagen, descripcion }) {
    return (
        <>
        <div className="cardContainer">
            <img className="rounded-circle" src={imagen} alt={`foto de perfil de ${nombre}`} srcSet={imagen} />
            <div>
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
            </div>
        </div>
        </>
    )
}

export default AboutCardComponent