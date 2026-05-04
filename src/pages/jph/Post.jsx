import { useEffect, useState } from "react"
import Loader from "../../compnents/Loader"
import Error from "../../compnents/Error"
import PostCard from "./PostCard"
import Title from "../../compnents/Title"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { appConfig } from "../../config/appConfig"


//hook til akald api
import useRequestData from "../../hooks/useRequestData"

const Post = () => {

    //åbn useRequestData
    const { makeRequest, isLoading, data, error } = useRequestData()

    //paginnation - next og previous
    const [currentPage, setCurrentPage] = useState(0) //data der skal vises - 0 svare til side 1

    //itemPerPage - hvor mange items/data skal der vises pr. "side"
    const [itemsPerPage, setItemsPerPage] = useState(5)

    //Antal "sider" i alt
    const totalPages = Math.ceil(data?.length / itemsPerPage) //ceil runder op så fx 20,2 bliver til 21

    useEffect (() => {
        
        makeRequest({ url: "https://jsonplaceholder.typicode.com/posts"})

    }, [] ) //dependency array hvis tomt køter useEffect kun når component loader

  return (
    <section className="mb-5"> 
      <title>{appConfig.companyName + "Post"}</title>

        <Title>Post</Title>

        <div className="ml-18 flex">
          <button onClick={ () => setCurrentPage( currentPage - 1 ) } 
          disabled = { currentPage <= 0 } 
          className="flex justify-evenly items-center px-3 py-2 mt-5 mb-10 mr-4 font-bold rounded border-2 bg-gray-500 hover:bg-gray-600 disabled:bg-gray-700"><FiChevronLeft/>Prev</button>

          <button onClick={ () => setCurrentPage( currentPage + 1 ) } 
          disabled = { currentPage + 1 >= totalPages} 
          className="flex justify-evenly items-center px-3 py-2 mt-5 mb-10 mr-4 font-bold rounded border-2 bg-gray-500 hover:bg-gray-600 disabled:bg-gray-700">Next <FiChevronRight/></button>
        
         <label className="flex justify-evenly items-center mt-6 mb-10 mr-4 p-4 bg-emerald-700 h-7 border-2">
           <select className="focus:outline-none focus:ring-2 focus:ring-green-900" 
             defaultValue = { itemsPerPage } 
             onChange = { ( e ) => { setCurrentPage ( 0 ); setItemsPerPage ( e.target.value ) } }>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
           </select>
         </label>
        </div>

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
            .slice( currentPage * itemsPerPage, (currentPage * itemsPerPage) + itemsPerPage )
            .map(p => 
            
            <PostCard key={p.id} p={p} ></PostCard>

        )}



        <p className='ml-16'> fra JSONPlaceholder</p>
    </section>
  )
}

export default Post