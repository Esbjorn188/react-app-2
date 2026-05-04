import { useEffect, useState } from "react"
import Loader from "../../compnents/Loader"
import Error from "../../compnents/Error"
import OpenWeather1Card from "./OpenWeather1Card"
import Title from "../../compnents/Title"
import Dawa from "./Dawa"
import LeafletMap from "./LeafletMap"

import { appConfig } from "../../config/appConfig"


//hook til akald api
import useRequestData from "../../hooks/useRequestData"

const OpenWeather3 = () => {

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
      <title>{appConfig.companyName + "Open Weather 3"}</title>


        <Title>Open Weather 3</Title>



        {/* loades */}
        {
            isLoading && <Loader></Loader>
        }

        {/* der er fejl */}
        {
            error && <Error></Error>
        }
        
        <Dawa setZip = { setZip }></Dawa>

        <div className="flex flex-wrap">

        <div>
        <div className="w-100 ml-16 mt-10 border-2 bg-emerald-700">
        { data && <LeafletMap lat = {data.coord.lat} lon = {data.coord.lon} weathertext = { data.weather[0].description}/>}
        </div>

        <p className='ml-18 mt-9'> From Leaflet</p>
        </div>

        <div>
        {/* der er data */}
        {
            data && <OpenWeather1Card w1={data}/>
        }
        <p className='ml-20'> From OpenWeather</p>
        </div>
        </div>


    </section>
  )
}

export default OpenWeather3