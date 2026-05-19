import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <nav>
        <menu className='bg-emerald-700 flex justify-evenly h-20 mx-auto pt-6 font-bold border-b-4'> 
            <li>
                <NavLink to="/admin">Home Admin</NavLink>
            </li>
            <li>
                <NavLink to="/admin/ZzzAdmin">ZzzAdmin</NavLink>
            </li>
            <li>
                <NavLink to="/">Leave Admin</NavLink>
            </li>
        </menu>

    
    </nav>

  )
}

export default Navbar