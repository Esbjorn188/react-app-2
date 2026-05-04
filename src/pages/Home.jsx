import { Link } from 'react-router'
import Title from '../compnents/Title'

import { appConfig } from '../config/appConfig'

const Home = () => {
  return (
    <div>

<title>{appConfig.companyName + "Home"}</title>

      <Title>Home</Title> 

     <p className='text-decoration-line: underline text-blue-600 ml-16'> <Link to="/about"> Læs om os </Link> </p> 

     <p className='text-decoration-line: underline text-blue-600 ml-16'> <a href="https://online.videndjurs.dk/my/" target="_blank"> Klik her (a-tag) </a> </p>
    
    </div>
    
  )
}

export default Home