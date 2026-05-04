import { useState } from "react"
import Title from "../compnents/Title"

import { appConfig } from "../config/appConfig"

const About = () => {
  // hook - useState-hook
    const [firstname, setFirstname] = useState("Karen")
    const [lastname, setLastname] = useState("Karensen")
  
  
  
    return (
      <div>
        <title>{appConfig.companyName + "About"}</title>

        <Title>About</Title>
  
        <div className="bg-emerald-700 w-100 ml-4 mb-4 border-2">
        <h2 className='ml-16'>Indtaste et første navn</h2>
        <p className='ml-16'>Første navn : { firstname } </p>
  
        <input className="border-2 ml-16 mt-3 mb-5 focus:outline-none focus:ring-2 focus:ring-green-900" 
        type="text" placeholder="Skriv et navn" 
        onChange={e => setFirstname(e.target.value)}/>
        </div>
  
        <div className="bg-emerald-700 w-100 ml-4 mb-4 border-2">
        <h2 className='ml-16'>Indtaste et Efternavn</h2>
        <p className='ml-16'>Efternavn : { lastname } </p>
  
        <input className="border-2 ml-16 mt-3 mb-5 focus:outline-none focus:ring-2 focus:ring-green-900" 
        type="text" placeholder="Skriv et Efternavn" 
        onChange={e => setLastname(e.target.value)}/>
        </div>
  
      </div>
    )
}

export default About