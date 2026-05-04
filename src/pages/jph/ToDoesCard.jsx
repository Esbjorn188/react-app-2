import { FiCheckCircle, FiClock } from "react-icons/fi";

const ToDoesCard = ({t}) => {
  return (
     <div className={`ml-16 border-2 mb-10 w-210 h-32 pl-5 pt-2 rounded-3xl ${ t.completed === true ? "bg-green-500" : "bg-red-500" }`}>

      <p className="ml-1 text-gray-500"> ID: {t.id}</p>

      <h2 className="text-2xl uppercase">{t.title}</h2>

      <p className="ml-1"> Progress: {t.completed} { t.completed === true ? "Done ✅" : "Not Done ❌" }</p>

      {/* { t.completed === true ? <FiCheckCircle/> : <FiClock/> } */}

      <p className="ml-2 text-gray-500"> User ID: {t.userId}</p>

     </div>
  );
};



export default ToDoesCard;