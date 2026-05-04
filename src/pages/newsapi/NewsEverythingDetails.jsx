import { useLocation, Link, Navigate } from "react-router"


const NewsEverythingDetails = () => {
    const location = useLocation()

    if(!location.state?.NewsEverything){
        return <Navigate to="/NewsEverything" replace/>
    }

    const { NewsEverything } = location.state

  return (
    <div className=" border-2 w-300 m-5 p-5 bg-emerald-700">
        <h2 className="text-3xl ml-14">{ NewsEverything.title }</h2>

        <p className="ml-16">
            {NewsEverything.author}
        </p>

        <p className="ml-16 mt-5">
            {NewsEverything.description}
        </p>

        <div className="ml-16 mt-5" >
            {NewsEverything.content}
        </div>


        <img className="w-100 h-80 ml-16 mt-5 object-cover" src={NewsEverything.urlToImage || "https://media.tenor.com/d27gEByLFVUAAAAM/lixovsk-hoshimi-miyabi.gif"} alt={ "Foto: " + NewsEverything.title} />

        <p className="ml-16"> Realeased  
            <time className="m-1">
                {new Date( NewsEverything.publishedAt).toLocaleString("da-DK", { year:"numeric", month:"long", day:"2-digit", hour:"numeric", minute:"2-digit" } ) }
            </time>
        </p>

        <Link to="/NewsEverything" className="ml-16 border-b text-blue-800">Tilbage</Link>
    </div>
  )
}

export default NewsEverythingDetails