import { useEffect } from "react"
import Loader from "../../compnents/Loader"
import Error from "../../compnents/Error"
import SpeciesCard from "./SpeciesCard"
import Title from "../../compnents/Title"

import { appConfig } from "../../config/appConfig"


//hook til akald api
import useRequestData from "../../hooks/useRequestData"

const Species = () => {

    //åbn useRequestData
    const { makeRequest, isLoading, data, error } = useRequestData()

    useEffect (() => {
        
        makeRequest({ url: "https://swapi.py4e.com/api/species/"})

    }, [])

  return (
    <section className="mb-5"> 
      <title>{appConfig.companyName + "Species"}</title>


        <Title>Species</Title>

        {/* loades */}
        {
            isLoading && <Loader></Loader>
        }

        {/* der er fejl */}
        {
            error && <Error></Error>
        }
        


        {/* der er data */}
        <div className="flex flex-wrap justify-evenly">
        {
            data && data.results.map( ( s, i ) => 
            
            <SpeciesCard key={ s.name + i } s = { s } ></SpeciesCard>

        )}
        </div>


        <p className='ml-16'> fra SwapiApi</p>
    </section>
  )
}

export default Species