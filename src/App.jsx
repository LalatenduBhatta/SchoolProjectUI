import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <div>
          <Menu />
        </div>
        <div>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  )
}
export default App