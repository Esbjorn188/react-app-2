import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Layout from "./layout/Layout";
import Albums from "./pages/jph/Albums";
import Post from "./pages/jph/Post";
import ToDoes from "./pages/jph/ToDoes";
import Species from "./pages/swapi/Species";
import SpeciesDetails from "./pages/swapi/SpeciesDetails";
import StarShips from "./pages/swapi/StarShips";
import NewsEverything from "./pages/newsapi/NewsEverything";
import NewsEverythingDetails from "./pages/newsapi/NewsEverythingDetails";
import OpenWeather1 from "./pages/openweather/OpenWeather1";
import OpenWeather2 from "./pages/openweather/OpenWeather2";
import OpenWeather3 from "./pages/openweather/OpenWeather3";


// const router = createBrowserRouter([
//   { path: "/", element: <Home/> },
//   { path: "/about", element: <About/> },
//   { path: "/contact", element: <Contact/> },
//   { path: "*", element: <NotFound/> }
// ])

const router = createBrowserRouter([
  {
    element: <Layout></Layout>, children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/albums", element: <Albums /> },
      { path: "/post", element: <Post /> },
      { path: "/ToDoes", element: <ToDoes /> },
      { path: "/Species", element: <Species /> },
      { path: "/SpeciesDetails", element: <SpeciesDetails /> },
      { path: "/StarShips", element: <StarShips /> },
      { path: "/NewsEverything", element: <NewsEverything /> },
      { path: "/NewsEverythingDetails", element: <NewsEverythingDetails /> },
      { path: "/OpenWeather1", element: <OpenWeather1 /> },
      { path: "/OpenWeather2", element: <OpenWeather2 /> },
            { path: "/OpenWeather3", element: <OpenWeather3 /> },
      { path: "*", element: <NotFound /> }
    ]
  }
]);

function App() {

  return <RouterProvider router={router} />;
  
}

export default App;