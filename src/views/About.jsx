import React from 'react'
import AboutCardComponent from '../components/sobre-nosotros-components/AboutCardComponent'
import "../styles/aboutContainer.css"

function About() {

    const personas = [
        {
            nombre: "Jesús Medina Gajardo",
            imagen: "https://i.ibb.co/zHgztJL/Whats-App-Image-2023-05-15-at-21-13-49.jpg",
            descripcion: "Apasionado por el mundo de la programación y la tecnología, Jesús es estudiante de Ingeniería en Computación y colaborador de comunidades de Software Libre y OpenSource. Les gusta enseñar y compartir conocimientos de tecnología",
        },
        {
            nombre: "Walther Thuman Llermaly",
            imagen: "https://i.ibb.co/x5dYT95/Whats-App-Image-2023-05-15-at-21-13-49-1.jpg",
            descripcion: "Especialista en análisis y procesamiento de datos, en la caja de herramientas de Walter encontramos skills de programación, habilidades analíticas y trabajo en equipo. A su pasión por los datos hoy suma el desarrollo de software.",
        },
        {
            nombre: "Rodrigo Quiroz Castro",
            imagen: "https://i.ibb.co/0MCp592/Whats-App-Image-2023-05-15-at-21-13-48.jpg",
            descripcion: "Periodista y editor de contenidos, Rodrigo está dando sus primeros pasos en el mundo TI. Amante de las tecnologías web, día por medio se cuestiona si sirve para el camino de la programación, pero sigue ahí, rasguñando y aprendiendo.",
        },
    ]

    return (
        <>
        <h1 className="text-center my-4 text-light">Acerca de nosotros</h1>
        <div className="aboutContainer">
            {
                personas.map(persona => {
                    return (
                    <AboutCardComponent 
                        key={persona.nombre}
                        nombre={persona.nombre} 
                        imagen={persona.imagen} 
                        descripcion={persona.descripcion}
                />
                    )    
                })
            }
        </div>
        </>
    )
}

export default About