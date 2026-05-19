import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav>
      <menu className="bg-emerald-700 flex justify-evenly h-20 mx-auto pt-6 font-bold border-b-4">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/admin">Admin</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>

        <div className="relative group">
        <button className="flex items-center gap-1 pb-3 w-40 hover:bg-emerald-800"> JSONPlaceholder ▼
            <div className="absolute left-0 w-40 hidden bg-emerald-800 shadow-lg group-hover:block top-9">
          <li className="block px-4 py-2 hover:bg-emerald-700">
            <NavLink to="/albums">Albums</NavLink>
          </li>
          <li className="block px-4 py-2 hover:bg-emerald-700">
            <NavLink to="/post">Post</NavLink>
          </li>
          <li className="block px-4 py-2 hover:bg-emerald-700">
            <NavLink to="/ToDoes">To Does</NavLink>
          </li>
          </div>
        </button>
        </div>

        <div className="relative group">
        <button className="flex items-center gap-1 pb-3 w-25 hover:bg-emerald-800"> SwapiApi ▼
            <div className="absolute left-0 hidden bg-emerald-800 shadow-lg group-hover:block top-9">
          <li className="block px-4 py-2 hover:bg-emerald-700">
            <NavLink to="/Species">Species</NavLink>
          </li>
          <li className="block px-4 py-2 hover:bg-emerald-700">
            <NavLink to="/StarShips">Star Ships</NavLink>
          </li>
          </div>
        </button>
        </div>

        <li>
          <NavLink to="/NewsEverything">News Everything</NavLink>
        </li>

        <div className="relative group">
        <button className="flex items-center gap-1 pb-3 w-35 hover:bg-emerald-800"> Open Weather ▼
            <div className="absolute left-0 hidden bg-emerald-800 shadow-lg group-hover:block top-9">
          <li className="block px-4 py-2 hover:bg-emerald-700">
            <NavLink to="/OpenWeather1">Open Weather 1</NavLink>
          </li>
          <li className="block px-4 py-2 hover:bg-emerald-700">
            <NavLink to="/OpenWeather2">Open Weather 2</NavLink>
          </li>
          <li className="block px-4 py-2 hover:bg-emerald-700">
            <NavLink to="/OpenWeather3">Open Weather 3</NavLink>
          </li>
          </div>
        </button>
        </div>

        <div className="relative group">
          <button className="flex items-center gap-1 pb-3 w-30 hover:bg-emerald-800">
            {" "}
            RapidAPI ▼
            <div className="absolute left-0 hidden bg-emerald-800 shadow-lg group-hover:block top-9">
              <li className="block px-4 py-2 hover:bg-emerald-700">
                <NavLink to="/Hobbies">Hobbies</NavLink>
              </li>
              <li className="block px-4 py-2 hover:bg-emerald-700">
                <NavLink to="/Facts">Facts</NavLink>
              </li>
              <li className="block px-4 py-2 hover:bg-emerald-700">
                <NavLink to="/LoveOMeter">Love O Meter</NavLink>
              </li>
              <li className="block px-4 py-2 hover:bg-emerald-700">
                <NavLink to="/DadJokes">Dad Jokes</NavLink>
              </li>
            </div>
          </button>
        </div>

        <li>
          <NavLink to="/Zzz">Zzz</NavLink>
        </li>
      </menu>
    </nav>
  );
};

export default Navbar;
