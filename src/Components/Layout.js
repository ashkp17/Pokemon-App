import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/Main"></Link>
        </li>
        <li>
          <Link to="/PokeDetail"></Link>
        </li>
      </ul>
      <Outlet />
    </>
  )
}

export default Layout
