import { useEffect, useState } from "react";
import Loader from "../../compnents/Loader";
import Error from "../../compnents/Error";
import Title from "../../compnents/Title";

import { appConfig } from "../../config/appConfig";

//hook til akald api
import useRequestData from "../../hooks/useRequestData";

const LoveOMeter = () => {
  const [firstName, setfirstName] = useState("Kej");

  const [lastName, setLastName] = useState("Andrea");

  //åbn useRequestData
  const { makeRequest, isLoading, data, error } = useRequestData();

  useEffect(() => {
    handleRequest();
  }, []);

  const handleRequest = (e) => {
    if (e) {
      e.preventDefault()
    }
    makeRequest({
      url: "https://love-o-meter.p.rapidapi.com/getmatch",
      method: "GET",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_APP_RAPIDAPIKEY,
        "x-rapidapi-host": "love-o-meter.p.rapidapi.com",
      },
      params: {
          firstname: firstName,
          secondname: lastName,
        },
    });
  };

  return (
    <section className="mb-5">
      <title>{appConfig.companyName + "Love O Meter"}</title>

      <Title>Love O Meter</Title>

      <p className="ml-16 text-3xl">do they match?</p>

      <div>
        <form onSubmit={() => handleRequest()} className="ml-16 mt-10 text-2xl w-100 flex flex-row">
          <div className="bg-emerald-700 border-2 p-2 mr-5 ml-20">
          <label>
            {" "}
            Write a name :
            <input
              className="border-2 ml-2 mt-2 p-1"
              type="text"
              required
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
            />
          </label>
          </div>
        
        <div className="bg-emerald-700 border-2 p-2">
          <label>
            {" "}
            Write a name :
            <input
              className="border-2 ml-2 mt-2 p-1"
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label></div>
          
        </form>
      </div>

      <button
          onClick={() => handleRequest()}
            className="bg-pink-500 mt-5 ml-103 rounded-4xl cursor-pointer border-2 p-5"
          >
            Match ?
          </button>

      {/* loades */}
      {isLoading && <Loader></Loader>}

      {/* der er fejl */}
      {error && <Error></Error>}

      {/* der er data */}
      {data && (
        <div className="border-2 bg-emerald-700 w-200 ml-22 mt-10 mb-5 p-5">
          <h2 className="text-2xl ml-16"> {data.hobby} </h2>
          <p className="ml-13 mb-5">
            Compatibillity: {data.match}%
          </p>
          <p className="ml-13">
            {data.comment}
          </p>
        </div>
      )}
      
      <p className="ml-16"> fra RapidAPI</p>
    </section>
  );
};

export default LoveOMeter;
