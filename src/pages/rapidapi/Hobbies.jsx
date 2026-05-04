import { useEffect } from "react"
import Loader from "../../compnents/Loader"
import Error from "../../compnents/Error"
import Title from "../../compnents/Title"

import { appConfig } from "../../config/appConfig"


//hook til akald api
import useRequestData from "../../hooks/useRequestData"

const Hobbies = () => {

    //åbn useRequestData
    const { makeRequest, isLoading, data, error } = useRequestData()

    useEffect (() => {
        
        makeRequest({url : "https://hobbies-by-api-ninjas.p.rapidapi.com/v1/hobbies",
            headers: {"x-rapidapi-key": import.meta.env.VITE_APP_RAPIDAPIKEY,
                      "x-rapidapi-host": "hobbies-by-api-ninjas.p.rapidapi.com"
            }
        })

    }, [])

  return (
    <section className="mb-5"> 
      <title>{appConfig.companyName + "Hobbies"}</title>


        <Title>Hobbies</Title>

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
            data && <div className="border-2 bg-emerald-700 w-100 ml-16">
                <h2 className="text-2xl ml-16"> { data.hobby } </h2>

                <p> ( Kategori: <span> { data.category } </span> )</p>

                <a href={data.link} target="_blank" rel="noopener noreferrer">Read about your new random hobbie here</a>

                <button>Give me a randomised new hobbie</button>
            </div>
        }


        <p className='ml-18'> fra RapidAPI</p>
    </section>
  )
}

export default Hobbies