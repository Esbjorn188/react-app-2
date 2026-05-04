import { useState } from "react";
import Title from "../compnents/Title";

import { appConfig } from "../config/appConfig";

const Contact = () => {
  // hook - useState-hook
  const [name, setName] = useState("Karen");
  const [age, setAge] = useState("22");

  return (
    <div>
      <title>{appConfig.companyName + "Contact"}</title>

      <Title>Contact</Title>

      <div className="bg-emerald-700 w-100 ml-4 mb-4 border-2">
        <h2 className="ml-16">Indtaste et navn</h2>
        <p className="ml-16">Navn er : {name} </p>

        <input
          className="border-2 ml-16 mt-3 mb-5 focus:outline-none focus:ring-2 focus:ring-green-900"
          type="text"
          placeholder="Skriv et navn"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="bg-emerald-700 w-100 ml-4 mb-4 border-2">
        <h2 className="ml-16">Indtaste en alder</h2>
        <p className="ml-16">Din alder : {age} </p>

        <input
          className="border-2 ml-16 mt-3 mb-5 focus:outline-none focus:ring-2 focus:ring-green-900"
          type="text"
          placeholder="Skriv din alder"
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Contact;
