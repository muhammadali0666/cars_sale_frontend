import { Header } from "../../components/Header"
import {Navbar} from "../../components/Navbar"
import { Inner } from "../../components/Inner"

export const InnerMain = () => {
  return (
    <div className="container">
      <Header/>
      <Navbar/>
      <Inner/>
    </div>
  )
}