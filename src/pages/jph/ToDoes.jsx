import { useEffect, useState } from "react"
import Loader from "../../compnents/Loader"
import Error from "../../compnents/Error"
import ToDoesCard from "./ToDoesCard"
import Title from "../../compnents/Title"

import { appConfig } from "../../config/appConfig"
import { Container, FullWidthContainer, FullWidthInnerContainer } from "../../layout/layoutCompnents/Container"


//hook til akald api
import useRequestData from "../../hooks/useRequestData"

const ToDoes = () => {

    //åbn useRequestData
    const { makeRequest, isLoading, data, error } = useRequestData()

    const [ showCompleted, setShowCompleted ] = useState(null) //true eller false

    useEffect (() => {
        
        makeRequest({ url: "https://jsonplaceholder.typicode.com/todos"})

    }, [])

  return ( 
      <section className="mb-5"> 
      <title>{appConfig.companyName + "ToDoes"}</title>

        <Title>To Does</Title>        

        <div className="ml-18">
          <button onClick={ () => setShowCompleted(null) } className="inline-block px-4 py-2 mt-5 mb-10 mr-4 font-bold rounded border-2 bg-blue-600 hover:bg-blue-800">Vis alle</button>

          <button onClick={ () => setShowCompleted(true) } className="inline-block px-4 py-2 mt-5 mb-10 mr-4 font-bold rounded border-2 bg-green-600 hover:bg-green-800">Vis Done</button>

          <button onClick={ () => setShowCompleted(false) } className="inline-block px-4 py-2 mt-5 mb-10 mr-4 font-bold rounded border-2 bg-red-600 hover:bg-red-800">Vis Not Done</button>

        </div>

        <div className="">
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
            data && data
                .filter(t => t.completed === showCompleted || showCompleted === null)
                .map(t => 
             <ToDoesCard key={t.id} t={t} ></ToDoesCard>)
            }


        <p className='ml-16'> fra JSONPlaceholder</p>
        </div>
    </section>
  )
}

export default ToDoes