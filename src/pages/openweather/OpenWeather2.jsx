import { useEffect, useState } from "react"
import Loader from "../../compnents/Loader"
import Error from "../../compnents/Error"
import OpenWeather1Card from "./OpenWeather1Card"
import Title from "../../compnents/Title"
import Dawa from "./Dawa"

import { appConfig } from "../../config/appConfig"


//hook til akald api
import useRequestData from "../../hooks/useRequestData"

const OpenWeather2 = () => {

    const [zip, setZip] = useState("8500")

    //åbn useRequestData
    const { makeRequest, isLoading, data, error } = useRequestData()

    
     useEffect (() => {
        
        makeRequest({url : "https://api.openweathermap.org/data/2.5/weather",
            method: "GET",
            params: {
                zip: zip + ",dk",
                lang: "en",
                units: "metric",
                apiKey: import.meta.env.VITE_APP_OPENWEATHERAPIKEY
            }

        })
     }, [ zip ] ) 
    

  return (
    <section className="mb-5"> 
      <title>{appConfig.companyName + "Open Weather 2"}</title>


        <Title>Open Weather 2</Title>


        <Dawa setZip = { setZip }></Dawa>

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
            data && <OpenWeather1Card w1={data}/>
        }


        <p className='ml-20'> From OpenWeather</p>
    </section>
  )
}

export default OpenWeather2