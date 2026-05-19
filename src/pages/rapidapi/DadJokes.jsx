import { useEffect } from "react"
import Loader from "../../compnents/Loader"
import Error from "../../compnents/Error"
import Title from "../../compnents/Title"

import { appConfig } from "../../config/appConfig"


//hook til akald api
import useRequestData from "../../hooks/useRequestData"

const DadJokes = () => {

    //åbn useRequestData
    const { makeRequest, isLoading, data, error } = useRequestData()

    useEffect (() => {
        
        handleRequest()

    }, [])

    const handleRequest = () => {
        makeRequest({url : "https://dad-jokes-by-api-ninjas.p.rapidapi.com/v1/dadjokes",
            headers: {"x-rapidapi-key": import.meta.env.VITE_APP_RAPIDAPIKEY,
                      "x-rapidapi-host": "dad-jokes-by-api-ninjas.p.rapidapi.com"
            }
        })
    }

  return (
    <section className="mb-5"> 
      <title>{appConfig.companyName + "Dad Jokes"}</title>


        <Title>Dad Jokes</Title>

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
            data && <div className="border-2 bg-emerald-700 w-100 ml-16 p-5">

                <p className="ml-2"> {data[0].joke}</p>

                <button className="bg-red-500 mt-5 rounded-4xl cursor-pointer border-2 p-5" onClick={() => handleRequest()}>Random Dad joke</button>
            </div>
        }


        <p className='ml-18'> fra RapidAPI</p>
    </section>
  )
}

export default DadJokes