import { useEffect } from "react"
import Loader from "../../compnents/Loader"
import Error from "../../compnents/Error"
import AlbumCard from "./AlbumCard"
import Title from "../../compnents/Title"

import { appConfig } from "../../config/appConfig"


//hook til akald api
import useRequestData from "../../hooks/useRequestData"

const Albums = () => {

    //åbn useRequestData
    const { makeRequest, isLoading, data, error } = useRequestData()

    useEffect (() => {
        
        makeRequest({url : "https://jsonplaceholder.typicode.com/albums"})

    }, [])

  return (
    <section className="mb-5"> 
      <title>{appConfig.companyName + "Albums"}</title>


        <Title>Albums</Title>

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
            data && data.map(a => 
            
            <AlbumCard key={a.id} a={a} ></AlbumCard>

        )}


        <p className='ml-16'> fra JSONPlaceholder</p>
    </section>
  )
}

export default Albums