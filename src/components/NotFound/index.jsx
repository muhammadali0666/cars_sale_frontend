import Not from "../../assets/404.avif"

export const NotFound = () => {
  return (
    <div>
      <img src={Not} alt="img" style={{width: "100%", height: "99vh"}} className="not_found" />
    </div>
  )
}
