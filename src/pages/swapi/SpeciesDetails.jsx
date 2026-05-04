import { useLocation, Link, Navigate } from "react-router"


const SpeciesDetails = () => {
    const location = useLocation()

    if(!location.state?.species){
        return <Navigate to="/Species" replace/>
    }

    const { species } = location.state
  return (
    <div>
        <h2 className="text-3xl ml-14">{ species.name }</h2>

        <Link to="/species" className="ml-16 border-b text-blue-800">Tilbage</Link>
    </div>
  )
}

export default SpeciesDetails