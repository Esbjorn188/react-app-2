

const OpenWeather1Card = ({w1}) => {
  return (
    <div className="ml-16 mt-10 border-2 w-80 mb-10 p-5 bg-emerald-700">

        <p className="ml-1 text-gray-900 text-3xl"> Country :  {w1.sys.country}</p>

        <p className="ml-2 text-gray-900 text-2xl"> Location :  {w1.name}</p>

        <p className="ml-4 text-gray-900"> Tempeture :  {Math.round(w1.main.temp)} C <sup>o </sup></p>

        <p className="ml-4 text-gray-900"> Wind speed :  {w1.wind.speed}</p>

        <p className="ml-4 text-gray-900"> Forecast :  {w1.weather[0].main}</p>

        <p className="ml-4 text-gray-900"> Description :  {w1.weather[0].description}</p>

        <img className="ml-6 mt-2 border bg-blue-400" src={"https://openweathermap.org/payload/api/media/file/" + w1.weather[0].icon + ".png"} alt="" />

        <p className="ml-4 text-gray-900">🌇 Sun goes up at : Kl. { new Date(w1.sys.sunrise * 1000 ).toLocaleTimeString ( "da-DK", {hour:"2-digit", minute: "2-digit" })}</p>
        <p className="ml-4 text-gray-900">🌆 Sun goes down at : Kl. { new Date(w1.sys.sunset * 1000 ).toLocaleTimeString ( "da-DK", {hour:"2-digit", minute: "2-digit" })}</p>
    </div>
  );
};


export default OpenWeather1Card;