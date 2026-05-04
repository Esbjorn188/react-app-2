import { Link } from "react-router";
import Species from "./species";

const SpeciesCard = ({s}) => {
  return (
    <div className="border-2 mb-10 mt-5 w-120 p-5 bg-emerald-700">

      <h2 className="text-3xl uppercase"> Name: {s.name}</h2>

      <p className="text-2xl ml-1 text-gray-800"> Classification: {s.classification}</p>


      <p className="text-2xl ml-1 text-gray-800"> Designation: {s.designation}</p>

      <p className="ml-1 text-gray-800"> Average height: {s.average_height}</p>

      <p className="ml-1 text-gray-800"> Average lifespan: {s.average_lifespan}</p>

      <Link className="ml-2 border-b text-blue-800" 
        to={"/SpeciesDetails" } state = {{ species: s }} >Read more about {s.name}
      </Link>

    </div>
  );
};

export default SpeciesCard;