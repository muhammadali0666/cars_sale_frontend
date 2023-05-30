import { AdminHeader } from "../../components/AdminHeader"
import { ModalCategory } from "../../components/ModalCategory"
import { Panel } from "../../components/Panel"
import { Sidebar } from "../../components/Sidebar"
import "./admin.css"

export const Admin = () => {
  return (
      <div className="admin container">
      <div className="admin_left col-3">
        <Sidebar/>
      </div>
      <div className="admin_right col-9">
        <AdminHeader/>
        <Panel/>
        {/* <ModalCategory/> */}
      </div>
    </div>
  )
}
