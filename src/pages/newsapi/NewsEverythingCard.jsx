import NewsEverything from "./NewsEverything";
import { Link } from "react-router";

const NewsEverythingCard = ({n}) => {
  return (
    <div className="m-auto border-2 mb-10 mt-10 w-160 h-160 p-5 bg-emerald-700">
      <h2 className="text-2xl uppercase">{n.title}</h2>

      <p className=" ml-1 text-gray-900"> Author: {n.author}</p>

      <p className="ml-2 text-gray-900"> {n.description?.slice( 0,100)} . . .</p>

      <img className="w-150 h-80 m-auto mt-5 object-cover" src={n.urlToImage || "https://media.tenor.com/d27gEByLFVUAAAAM/lixovsk-hoshimi-miyabi.gif"} alt={ "Foto: " + n.title} />



      <a className="text-blue-800 border-b-2 ml-5" href={n.url} target="_blank">Read More From Newssite</a>

      <div className="ml-5">
         <Link className="ml-2 border-b text-blue-800" 
          to={"/NewsEverythingDetails" } state = {{ NewsEverything: n }} >Read more about article
         </Link>
       </div>
      


    </div>
  );
};

export default NewsEverythingCard;