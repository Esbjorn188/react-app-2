import { Outlet } from "react-router"
import Header from "./Header"
import Footer from "./Footer"

const Layout = () => {
  return (
    <section className="flex flex-col bg-emerald-400">

        <Header></Header>

        <main className="mt-3 min-h-lvh">
            {/* pages - pagecomponents */}
        <Outlet></Outlet>
        </main>
        <Footer></Footer>
        

    </section>
  )
}

export default Layout