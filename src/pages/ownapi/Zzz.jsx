import { useEffect } from "react"
import Loader from "../../compnents/Loader"
import Error from "../../compnents/Error"
import Title from "../../compnents/Title"
import ZzzCard from "./ZzzCard"

import { appConfig } from "../../config/appConfig"


//hook til akald api
import useRequestData from "../../hooks/useRequestData"

const Zzz = () => {

    //åbn useRequestData
    const { makeRequest, isLoading, data, error } = useRequestData()

    useEffect (() => {
        
        makeRequest({url : "http://localhost:5000/zzz"})

    }, [])

  return (
    <section className="mb-5"> 
      <title>{appConfig.companyName + "Zzz"}</title>


        <div className="mt-5 mb-10"><Title>Zenless Zone Zero : Agents</Title></div>

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
         {data && data.zzz.map(z =>
              <ZzzCard key={z.id} z={z} ></ZzzCard>
         )}
        </div>
        


        <p className='ml-16'> fra OwnAPI</p>
    </section>
  )
}

export default Zzz