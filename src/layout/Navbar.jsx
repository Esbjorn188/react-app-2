import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <nav>
        <menu className='bg-emerald-700 flex justify-evenly h-20 mx-auto pt-6 font-bold border-b-4'> 
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
                <NavLink to="/albums">Albums</NavLink>
            </li>
            <li>
                <NavLink to="/post">Post</NavLink>
            </li>
            <li>
                <NavLink to="/ToDoes">To Does</NavLink>
            </li>
            <li>
                <NavLink to="/Species">Species</NavLink>
            </li>
            <li>
                <NavLink to="/StarShips">Star Ships</NavLink>
            </li>
            <li>
                <NavLink to="/NewsEverything">News Everything</NavLink>
            </li>
            <li>
                <NavLink to="/OpenWeather1">Open Weather 1</NavLink>
            </li>
            <li>
                <NavLink to="/OpenWeather2">Open Weather 2</NavLink>
            </li>
            <li>
                <NavLink to="/OpenWeather3">Open Weather 3</NavLink>
            </li>
            <li>
                <NavLink to="/Hobbies">Hobbies</NavLink>
            </li>
        </menu>


    </nav>
  )
}

export default Navbar