import { useEffect } from "react"
import Loader from "../../compnents/Loader"
import Error from "../../compnents/Error"
import Title from "../../compnents/Title"
import NewsEverythingCard from "./NewsEverythingCard"

import { appConfig } from "../../config/appConfig"

import useRequestData from "../../hooks/useRequestData"
import { useState } from "react"

import { language as jsonlanguage} from "./newsparameters.json"

const NewsEverything = () => {

    const { makeRequest, isLoading, data, error } = useRequestData()

    const [query, setQuery] = useState("dollar")

    const [language, setlanguage] = useState("en")

    useEffect (() => {

        handleSearch()
        
        // makeRequest({url : "https://newsapi.org/v2/everything", 
        //     method: "GET",
        //     params: {
        //         q: query,
        //         language: "en",
        //         apiKey: import.meta.env.VITE_APP_NEWSAPIKEY
        //     }
        // })

    }, [])

    const handleSearch = ( e ) => {

        if ( e ) e.preventDefault()

        makeRequest({url : "https://newsapi.org/v2/everything", 
            method: "GET",
            params: {
                q: query,
                language: language,
                apiKey: import.meta.env.VITE_APP_NEWSAPIKEY
            }
        })
    }

  return (
    <section>
        <title>{appConfig.companyName + "News Everything"}</title>

        <Title>News - Everything</Title>

         {/* loades */}
        {
            isLoading && <Loader></Loader>
        }

        {/* der er fejl */}
        {
            error && <Error></Error>
        }
        

        <form onSubmit={ handleSearch }>
            <input className="border-2 ml-15 mr-4 p-2" onChange = { e => setQuery ( e.target.value ) } type="text" placeholder="Search Here" />

            <label className="border-2 mr-4 p-2">
           <select className="focus:outline-none focus:ring-2 focus:ring-green-900" 
             defaultValue = { language } 
             onChange = { ( e ) => { setlanguage ( 0 ); setlanguage ( e.target.value ) } }>

            {
                jsonlanguage.map(l => <option value= {l.code} > {l.language}</option>)
            }

              {/* <option value="ar">Arabic</option>
              <option value="de">German</option>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="he">Hebrew</option>
              <option value="it">Italian</option>
              <option value="nl">Dutch</option>
              <option value="no">Norwegian</option>
              <option value="pt">Portuguese</option>
              <option value="ru">Russian</option>
              <option value="sv">Swedish</option>
              <option value="zh">Chinese</option> */}
           </select>
         </label>

            <button className="border-2 ml-3 p-2" >SØG 🔍</button>
        </form>

        

        <div className="ml-16">
        {data && data.articles.length <= 0 && <h2> you searched for { query } - in selected language there are no results</h2>}
        </div>

        <div className="flex flex-wrap justify-evenly">
        {/* der er data */}
        {
            data && data.articles.map(n => 
            
            <NewsEverythingCard key={n.id} n={n} ></NewsEverythingCard>

        )}
        </div>


        <p className='ml-16 mb-5'> fra NewsAPI</p>
    </section>
  )
}

export default NewsEverything