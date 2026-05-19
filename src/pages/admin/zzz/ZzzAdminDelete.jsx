import { useEffect } from "react"
import Loader from "../../../compnents/Loader"
import Error from "../../../compnents/Error"
import Title from "../../../compnents/Title"

import { Link } from 'react-router'

import { AiFillDelete, AiFillEdit} from "react-icons/ai"

import { appConfig } from "../../../config/appConfig"
import useRequestData from "../../../hooks/useRequestData"

const ZzzAdminDelete = () => {

    //åbn useRequestData
    // GET
    const { makeRequest, isLoading, data, error } = useRequestData()

    // DELETE
    const { makeRequest:makeRequestDelete, isLoading:isLoadingDelete, data:dataDelete, error:errorDelete } = useRequestData()

    // PATCH
    const { makeRequest:makeRequestPatch, isLoading:isLoadingPatch, data:dataPatch, error:errorPatch } = useRequestData()

    useEffect (() => {
        
        makeRequest({url : "http://localhost:5000/zzz"})

    }, [dataDelete, dataPatch])

    // SLET - overvej at lave en selvstændig (eller child) component til dette 
    const handleDelete = (zzzId, zzzTitle) => {

        // alert(zzzId)

        if ( window.confirm("Er du sikker på at du ville slette: " + zzzTitle)) {

            makeRequestDelete( { url: "http://localhost:5000/zzz/" + zzzId, method: "DELETE" } )
        }

        //kald delete method i API

    }


    const handlePatch = (zzz) => {

        // toggle done - vær det modsatte af det done er nu
        let jsonbody = JSON.stringify( { done: !zzz.done } )

        makeRequestPatch({ 
            url: "http://localhost:5000/zzz/" + zzz._id, 
            method: "PATCH", 
            body:jsonbody, 
            headers: {"Content-Type": "application/json"}})

        // PATCH og sende JSON-data med
        

    }

  return (
    
      <section> 
       <title>{appConfig.companyName + "ZzzAdminDelete"}</title>

        <div className="mb-10 pt-5"><Title>Zzz Admin Edit / Delete</Title></div>

        {/* loades */}
        {
            (isLoading || isLoadingDelete) && <Loader></Loader>
        }

        {/* der er fejl */}
        {
            (error || errorDelete) && <Error></Error>
        }
        


        {/* der er data */}
        <table className="border-2 ml-10 p-5 bg-emerald-400">
            <thead>
                <tr className="bg-emerald-600 border-b-2"> 
                    <th className="border-l-2">IMG</th>
                    <th className="border-l-2">ID</th>
                    <th className="border-l-2">Title</th>
                    <th className="border-l-2">Beskrivelse</th>
                    <th className="border-l-2">Done</th>
                    <th className="border-l-2">RET</th>
                    <th className="border-l-2">SLET</th>
                </tr>
            </thead>

            <tbody>
                
                {
                    
                    data && data.zzz.map(z =>
                        <tr key={ z._id } className="even:bg-emerald-500">
                            <td className="p-5 border-b-2"><img className="w-10 h-10 border" src={"http://localhost:5000/img/" + z.img} alt={"Foto: " + z.title} /></td>
                            <td className="p-5 border-b-2">{ z._id }</td>
                            <td className="p-5 border-b-2">{ z.title }</td>
                            <td className="p-5 border-b-2">{ z.descripttion.slice( 0, 30 ) } ...</td>

                            <td className="p-5 border-b-2 border-l-2 cursor-pointer">
                                <input type="checkbox" defaultChecked={ z.done } onChange={() => handlePatch(z)}/> 

                            </td>

                            <td className="p-5 border-b-2 border-l-2">
                                <Link to={"/admin/ZzzAdminEdit/" + z._id}>
                                <AiFillEdit className="text-green-600 cursor-pointer"/></Link>
                            </td>

                            <td className="p-5 border-b-2 border-l-2">
                                <AiFillDelete onClick={ () => handleDelete( z._id, z.title ) } className="text-red-600 cursor-pointer"/>
                            </td>
                        </tr>   
                    )
                }

            </tbody>
            
        </table>
        

        <p className='ml-16 mt-5'> fra OwnAPI</p>

        <p className=" ml-18"> Go back <Link className='text-decoration-line: underline text-blue-600' to="/admin/ZzzAdmin"> ZzzAdmin </Link> </p> 
    </section>

  )
}

export default ZzzAdminDelete