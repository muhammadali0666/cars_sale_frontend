import { Navbar } from "../../components/Navbar"
import { Header } from "../../components/Header"
import { ModelTypes } from "../../components/ModelTypes"


export const Models = () => {
  return (
    <div className="model container">
      <Header/>
      <Navbar/>
      <ModelTypes/>
    </div>
  )
}
