import { useEffect, useState } from "react"
import Loader from "../../compnents/Loader"
import Error from "../../compnents/Error"
import OpenWeather1Card from "./OpenWeather1Card"
import Title from "../../compnents/Title"

import { appConfig } from "../../config/appConfig"


//hook til akald api
import useRequestData from "../../hooks/useRequestData"

const OpenWeather1 = () => {

    const [zip, setZip] = useState("8500")

    const [formIsValid, setFormIsValid] = useState(true)

    //åbn useRequestData
    const { makeRequest, isLoading, data, error } = useRequestData()

    
     useEffect (() => {
        
        if (formIsValid === true ) {
        makeRequest({url : "https://api.openweathermap.org/data/2.5/weather",
            method: "GET",
            params: {
                zip: zip + ",dk",
                lang: "en",
                units: "metric",
                apiKey: import.meta.env.VITE_APP_OPENWEATHERAPIKEY
            }

        })
    }
     }, [ zip ] ) 
    

  return (
    <section className="mb-5"> 
      <title>{appConfig.companyName + "Open Weather 1"}</title>


        <Title>Open Weather 1</Title>

        <form className="ml-16 mt-10 text-2xl w-100 bg-emerald-700 border-2 p-2">

            <label> Write a postnumber
                <input className="border-2 ml-2 mt-2 p-1" 
                type="text" 
                required
                pattern="^[1-9]\d{3}$"
                value= { zip } 
                onInput={ e => { setZip( e.target.value ) ; setFormIsValid(e.target.checkValidity()) } }/>
            </label>

        </form>


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

export default OpenWeather1