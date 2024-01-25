import "./Menu.css"
import Toggle from "../Toggle/Index"

export default function Menu({ children }) {

  return (
      <Toggle>
        <div className="menu--container">
          {children}
        </div>
      </Toggle>
  )
  
}