import axios from "axios"
import { useState } from "react"

const useRequestData = () => {

    // afventer/loader erorr data
    const [isLoading, setIsLoading] = useState(false)

    const [data, setData] = useState(null)

    const [error, setError] = useState(null)


    //function som ringer op til API'et
    const makeRequest = async ( {url, method="GET", body=null, headers={}, params={}} ) => {

        let response //resultatet af opkald til api - gemmes i useState data når vi er færdige

        setIsLoading(true) // vi venter på data - eller error
        setError(null) // nulstil error

        // kunstig forsinkelse - fx til test af loader
        await new Promise(resolve => setTimeout( resolve, 500))



        try {

            // prøv at gøre dette
            // ... hvis det går godt, fortsætter vi her ... get Get geT
            // GET
            if(method.toUpperCase() === "GET") {

                response = await axios.get(url, {headers, params} )

                //HUSK håntering af POST PUT PATCH DELETE

            } 
            // POST
            else if( method.toUpperCase() === "POST" ) {

                response = await axios.post( url, body, { headers, params } )

            }
            // PUT
            else if( method.toUpperCase() === "PUT" ) {

                response = await axios.put( url, body, { headers, params } )

            }
            // PATCH
            else if( method.toUpperCase() === "PATCH" ) {

                response = await axios.patch( url, body, { headers, params } )

            }
            // DELETE
            else if( method.toUpperCase() === "DELETE" ) {

                response = await axios.delete( url, { headers, params } )

            }
            
            
            else {
                throw new Error("Forkert metode - vælg GET POST PUT PATCH eller DELETE")
            }

            setData(response.data)
            return true
            
        } catch (error) {
            setError( error.message)
            setData( null ) // nulstil data
            //hvis det går galt - error - så gør det her 

            //send fejlen videre
            throw error
            

        } finally {

            setIsLoading(false) //færdi med at loade

        }

    }

    //send ud til komponenter som skal bruges hooker her = 
  return { makeRequest, isLoading, data, error }
}

export default useRequestData