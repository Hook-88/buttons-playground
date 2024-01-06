import { createContext, useState } from "react"
import "./Menu.css"

const MenuContext = createContext()

export default function Menu({children}) {
const [open, setOpen] = useState(false)

function toggle() {
  setOpen(prevOpen => !prevOpen)
}

  return (
    <MenuContext.Provider value={{open, toggle}}>
      <div className="menu--container">
        {children}
      </div>
    </MenuContext.Provider>
  )
}

export { MenuContext }