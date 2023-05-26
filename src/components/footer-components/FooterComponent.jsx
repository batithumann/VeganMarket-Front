import { NavLink } from 'react-router-dom';

const FooterComponent = () => {
  return (
    <div className="container-fluid p-0">
      <footer className=" footer py-3 pt-4">
        <ul className="nav justify-content-center pb-3 mb-3">
          <li>
            <NavLink className="nav_link text-light" to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink className="nav_link text-light" to='/nosotros'>Nosotros</NavLink>
          </li>
          <li>
            <NavLink className="nav_link text-light" to='/contacto'>Contacto</NavLink>
          </li>

        </ul>
        <hr className="w-75 m-auto"/>
        <p className="text-center text-light mt-3">🄯 TheVeganMarket</p>
      </footer>
    </div>
  )
}

export default FooterComponent;