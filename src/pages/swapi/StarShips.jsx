import { useEffect, useState } from "react"
import Loader from "../../compnents/Loader"
import Error from "../../compnents/Error"
import StarShipsCard from "./StarShipsCard"
import Title from "../../compnents/Title"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { appConfig } from "../../config/appConfig"


//hook til akald api
import useRequestData from "../../hooks/useRequestData"

const StarShips = () => {

    //åbn useRequestData
    const { makeRequest, isLoading, data, error } = useRequestData()

    const [ showPage, setShowPage ] = useState(1)

    useEffect (() => {
        
        makeRequest({ url: "https://swapi.py4e.com/api/starships/?page=" + showPage })

    }, [ showPage ])

  return (
    <section className="mb-5"> 
      <title>{appConfig.companyName + "Starships"}</title>


        <Title>Starships</Title>

        <div className="flex ml-15">
         <button  onClick={ () => setShowPage( showPage - 1 ) } 
         disabled = { !data?.previous || isLoading }
         className="flex justify-evenly items-center px-3 py-2 mt-5 mb-10 mr-4 font-bold rounded border-2 bg-gray-500 hover:bg-gray-600 disabled:bg-gray-700"><FiChevronLeft/>Prev</button>

         <button onClick={ () => setShowPage( showPage + 1 ) } 
         disabled = { !data?.next || isLoading}
         className="flex justify-evenly items-center px-3 py-2 mt-5 mb-10 mr-4 font-bold rounded border-2 bg-gray-500 hover:bg-gray-600 disabled:bg-gray-700">Next <FiChevronRight/></button>
         </div>
        

        {/* loades */}
        {
            isLoading && <Loader></Loader>
        }

        {/* der er fejl */}
        {
            error && <Error></Error>
        }
        


        {/* der er data */}
        {
            data && data.results.map( (h, i) => 
            
            <StarShipsCard key={h.name + i} h = { h } ></StarShipsCard>

        )}


        <p className='ml-16'> fra SwapiApi</p>
    </section>
  )
}

export default StarShips