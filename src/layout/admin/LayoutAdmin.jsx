import NavbarAdmin from "./NavBarAdmin"
import FooterAdmin from "./FooterAdmin"
import { Outlet } from "react-router"

const LayoutAdmin = () => {
  return (
    <div>
      <div></div>
      <NavbarAdmin></NavbarAdmin>

      <main className="min-h-lvh bg-emerald-500">
        <Outlet></Outlet>
      </main>

      <FooterAdmin></FooterAdmin>
    </div>
  )
}

export default LayoutAdmin