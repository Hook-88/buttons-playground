import { useState, createContext } from "react"

import "./App.css"
import Menu from "./components/Menu"
import MenuButton from "./components/MenuButton"
import MenuDropdown from "./components/MenuDropdown"
import MenuItem from "./components/MenuItem"

const MenuContext = createContext()

export default function App() {
  const sports = ["Footbal", "Ping pong", "Tejo", "Bolirana"]
  const [open, setOpen] = useState(false)

  function toggleDropdown() {
    setOpen(prevOpen => !prevOpen)
  }

  return (
    <div>
      <MenuContext.Provider value={{open}}>
      <Menu>
        <MenuButton onClick={toggleDropdown}>Sports</MenuButton>
        <MenuDropdown>
          {sports.sort().map(sport => (
              <MenuItem key={sport}>{sport}</MenuItem>
            )
          )}
        </MenuDropdown>
      </Menu>
      </MenuContext.Provider>
    </div>
  )
}

export { MenuContext } 
