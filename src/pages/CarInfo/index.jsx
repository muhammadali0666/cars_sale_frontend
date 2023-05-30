import { Header } from "../../components/Header"
import {Navbar} from "../../components/Navbar"
import { CarInfoCard } from "../../components/CarInfoCard"

export const CarInfo = () => {
  return (
    <div className="container">
      <Header/>
      <Navbar/>
      <CarInfoCard/>
    </div>
  )
}
