import { Link } from 'react-router'
import Title from '../../../compnents/Title'

import { appConfig } from '../../../config/appConfig'

const ZzzAdmin = () => {
  return (
    <div>

<title>{appConfig.companyName + "ZzzAdmin"}</title>

      <Title>ZzzAdmin</Title> 

     <p className='text-decoration-line: underline text-blue-600 ml-16 mt-3 text-2xl'> <Link to="/admin/ZzzAdminDelete"> ZzzAdminEdit/Delete </Link> </p> 

     <p className='text-decoration-line: underline text-blue-600 ml-16 mt-3 text-2xl'> <Link to="/admin/ZzzAdminCreate"> ZzzAdminCreate </Link> </p> 
    </div>
    
  )
}

export default ZzzAdmin