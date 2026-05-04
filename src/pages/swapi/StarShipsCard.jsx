import SpaceShips from "./StarShips";

const StarShipsCard = ({h}) => {
  return (
    <div className="ml-16 border-2 mb-10 w-200 p-5 mt-5 bg-emerald-700">

      <h2 className="text-2xl uppercase">{h.name}</h2>

      <p className=" ml-1 text-gray-900"> Model: {h.model}</p>

      <p className="ml-2 text-gray-900"> Manufacturer: {h.manufacturer}</p>
      
      <p className="ml-2 text-gray-900"> Cost In Credits: {h.cost_in_credits}</p>

      <p className="ml-2 text-gray-900"> Length: {h.length}</p>

      <p className="ml-2 text-gray-900"> Max Atmosphering Speed: {h.max_atmosphering_speed}</p>

      <p className="ml-2 text-gray-900"> Crew: {h.crew}</p>

      <p className="ml-2 text-gray-900"> Passengers: {h.passengers}</p>

      <p className="ml-2 text-gray-900"> Cargo Capacity: {h.cargo_capacity}</p>

      <p className="ml-2 text-gray-900"> Hyperdrive Rating: {h.hyperdrive_rating}</p>

      <p className="ml-2 text-gray-900"> Starship Class: {h.starship_class}</p>
    </div>
  );
};

export default StarShipsCard;