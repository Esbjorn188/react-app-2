import { useEffect, useState } from "react"
import Loader from "../../compnents/Loader"
import Error from "../../compnents/Error"

//hook til akald api
import useRequestData from "../../hooks/useRequestData"

const Dawa = ( { setZip } ) => {

    const [search, setSearch] = useState("8500")

    const [formIsValid, setFormIsValid] = useState( true )

    //åbn useRequestData
    const { makeRequest, isLoading, data, error } = useRequestData()

    
     useEffect (() => {
        
        if ( formIsValid === true ) {

            console.log("der er fundet et postnumber: ", search) 

            setZip(search)

        }
        
        else {
            console.log("led vidre")
            makeRequest({url : "https://api.dataforsyningen.dk/postnumre/autocomplete",
                method: "GET",
                params: {
                    q : search
                }
    
            })
        }
        
    }, [ search ] ) 
    

  return (
    <section className="mb-5"> 

        <form className="ml-16 mt-10 text-2xl w-100 bg-emerald-700 border-2 p-2" onSubmit={ e => e.preventDefault()}>

            <label> Write a postnumber
                <input className="border-2 ml-2 mt-2 p-1" 
                list = "postnummerlist"
                type="text" 
                required
                pattern="^[1-9]\d{3}$"
                value= { search } 
                onInput={ e => { setSearch( e.target.value ) ; setFormIsValid(e.target.checkValidity()) } }/>
            </label>

            <datalist id="postnummerlist">
                {
                    data && data.slice(0,10).map( p => 
                    <option value={p.postnummer.nr} > {p.tekst}</option>)
                }
            </datalist>

        </form>


        {/* loades */}
        {/* {
            isLoading && <Loader></Loader>
        } */}

        {/* der er fejl */}
        {
            error && <Error></Error>
        }
        
        <p className='ml-18 mt-5'> From Dawa</p>
    </section>
  )
}

export default Dawa