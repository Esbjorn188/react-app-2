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
            if(method.toUpperCase() === "GET") {

                response = await axios.get(url, {headers, params} )

                //HUSK håntering af POST PUT PATCH DELETE

            } else {
                throw new Error("Forkert metode - vælg GET POST PUT PATCH eller DELETE")
            }

            setData(response.data)
            return true
            
        } catch (error) {
            setError( error.message)
            setData( null ) // nulstil data
            //hvis det går galt - error - så gør det her 
            

        } finally {

            setIsLoading(false) //færdi med at loade

        }

    }

    //send ud til komponenter som skal bruges hooker her = 
  return { makeRequest, isLoading, data, error }
}

export default useRequestData