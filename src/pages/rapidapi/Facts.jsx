import { useEffect } from "react"
import Loader from "../../compnents/Loader"
import Error from "../../compnents/Error"
import Title from "../../compnents/Title"

import { appConfig } from "../../config/appConfig"


//hook til akald api
import useRequestData from "../../hooks/useRequestData"

const Facts = () => {

    //åbn useRequestData
    const { makeRequest, isLoading, data, error } = useRequestData()

    useEffect (() => {
        
        handleRequest()
    }, [])

    const handleRequest = () => {
        makeRequest({url : "https://facts-by-api-ninjas.p.rapidapi.com/v1/facts",
            headers: {"x-rapidapi-key": import.meta.env.VITE_APP_RAPIDAPIKEY,
                      "x-rapidapi-host": "facts-by-api-ninjas.p.rapidapi.com"
            }
        })
    }

  return (
    <section className="mb-5"> 
      <title>{appConfig.companyName + "Facts"}</title>


        <Title>Facts</Title>

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

          data && <div>

            <p className="ml-12 bg-emerald-700 border-2 p-5 w-50">{data[0].fact}</p>
            
            <button className="bg-green-500 mt-5 ml-12 mb-5 rounded-4xl cursor-pointer border-2 p-4" onClick={() => handleRequest()}>New randomised fact</button>
            
            </div>
          

          
        }


        <p className='ml-16'> fra RapitAPI</p>
    </section>
  )
}

export default Facts