import { useParams, useNavigate } from "react-router";
import { Link } from "react-router";
import Title from "../../../compnents/Title";

import { appConfig } from "../../../config/appConfig";

import useRequestData from "../../../hooks/useRequestData"
import Loader from "../../../compnents/Loader";
import Error from "../../../compnents/Error";
import { useEffect } from "react";


const ZzzEdit = () => {

    const navigate = useNavigate()

    const { id } = useParams() // snup id fra params i url'en

    // GET
     const { makeRequest, isLoading, data, error } = useRequestData()
    // PUT
     const { makeRequest:makeRequestPUT, isLoading:isLoadingPUT, data:dataPUT, error:errorPUT } = useRequestData()

  useEffect(() => {
    
    makeRequest({url: "http://localhost:5000/zzz/" + id})
    
  }, [])

  const handleSubmit = (e) => {

    e.preventDefault()

    const formdata = new FormData(e.target)

    makeRequestPUT( { url: "http://localhost:5000/zzz/" + id, method: "PUT", body:formdata } )
    .then( () => navigate("/admin/ZzzAdminDelete") )

  }
  

  return (

    <section>

      <Title>Edit Zzz Agent</Title>

      { (isLoading || isLoadingPUT) && <Loader/>}
      { (error || errorPUT) && <Error/> }
      
      { data && 
      <form onSubmit= { handleSubmit } className="border-2 w-100 ml-16 p-5 bg-emerald-700">

        <div> <p className="text-2xl mb-1">Title</p>
      <label> 
        <input name="title" 
        defaultValue={data.zzz.title} 
        className="border ml-1 mb-2 focus:outline-none focus:ring-2 focus:ring-green-900" type="textarea" 
        placeholder="Title her..."/>
      </label>
      </div>

        <div> <p className="text-2xl mb-1">Faction</p>
      <label> 
        <input name="faction" 
        defaultValue={data.zzz.faction} 
        className="border ml-1 mb-2 focus:outline-none focus:ring-2 focus:ring-green-900" type="textarea" 
        placeholder="Name of Faction her..."/>
      </label>
        </div>

        <div> <p className="text-2xl mb-1">Descripttion</p>
      <label> 
        <input name="descripttion" 
        defaultValue={data.zzz.descripttion} 
        className="border ml-1 mb-2 focus:outline-none focus:ring-2 focus:ring-green-900" type="textarea" 
        placeholder="Descripttion her..."/>
      </label>
      </div>

        <div> <p className="text-2xl mb-1">W_Engien</p>
      <label> 
        <input 
        name="w_engien" 
        defaultValue={data.zzz.w_engien} 
        className="border ml-1 mb-2 focus:outline-none focus:ring-2 focus:ring-green-900" type="textarea" 
        placeholder="Name of W_Engien her..."/>
      </label>
      </div>

        <p className="ml-2 italic">minst 2 tegn</p>


        <div> <p className="text-2xl mb-1">vælg evt. nyt img (overskriver det esksisterende)</p>
      <label>
        <input name="img" 
        className="border ml-1 mb-2 focus:outline-none focus:ring-2 focus:ring-green-900" type="file"/>
        <br />
        <p>Nuværende img : </p> 
        <img src={"http://localhost:5000/img/" + data.zzz.img} 
        alt="nuværende img" />
      </label>
      </div>
      

     <div className="ml-1 mt-2">
      <button className="border bg-emerald-900 p-2 cursor-pointer">
            Edit Zzz Agent
       </button>
    </div>

     </form>
      }

        <p className=" ml-18 mt-3"> Go back <Link className='text-decoration-line: underline text-blue-600' to="/admin/ZzzAdminDelete"> Edit/Delete </Link> </p> 

    </section>

  )
}

export default ZzzEdit