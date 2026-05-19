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
import Hobbies from "./pages/rapidapi/Hobbies";
import Facts from "./pages/rapidapi/Facts";
import LoveOMeter from "./pages/rapidapi/LoveOMeter";
import DadJokes from "./pages/rapidapi/DadJokes";
import Zzz from "./pages/ownapi/Zzz";

//ADMIN
import LayoutAdmin from "./layout/admin/LayoutAdmin";
import HomeAdmin from "./pages/admin/HomeAdmin";
import ZzzAdmin from "./pages/admin/zzz/ZzzAdmin";
import ZzzAdminDelete from "./pages/admin/zzz/ZzzAdminDelete";
import ZzzAdminCreate from "./pages/admin/zzz/ZzzAdminCreate";
import ZzzAdminEdit from "./pages/admin/zzz/ZzzAdminEdit";


// const router = createBrowserRouter([
//   { path: "/", element: <Home/> },
//   { path: "/about", element: <About/> },
//   { path: "/contact", element: <Contact/> },
//   { path: "*", element: <NotFound/> }
// ])

const router = createBrowserRouter([
  {
    element: <Layout></Layout>, 
    children: [
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
      { path: "/Hobbies", element: <Hobbies /> },
      { path: "/Facts", element: <Facts /> },
      { path: "/LoveOMeter", element: <LoveOMeter /> },
      { path: "/DadJokes", element: <DadJokes /> },      
      { path: "/Zzz", element: <Zzz /> },  
      { path: "*", element: <NotFound /> }
    ]
  },
  {
    path: "/admin",
    element: <LayoutAdmin/>,
    children: [
      { index: true, element: <HomeAdmin/> },
      { path: "ZzzAdmin", element: <ZzzAdmin/> },
      { path: "ZzzAdminDelete", element: <ZzzAdminDelete/> },
      { path: "ZzzAdminCreate", element: <ZzzAdminCreate/> },
      { path: "ZzzAdminEdit/:id", element: <ZzzAdminEdit/> }
    ]
  }
]);

function App() {

  return <RouterProvider router={router} />;
  
}

export default App;