import { useState, createContext } from "react"

import "./App.css"
import Menu from "./components/Menu"
import MenuButton from "./components/MenuButton"
import MenuDropdown from "./components/MenuDropdown"
import MenuItem from "./components/MenuItem"


export default function App() {
  const sports = ["Footbal", "Ping pong", "Tejo", "Bolirana"]

  return (
    <div>
      <Menu>
        <MenuButton>Sports</MenuButton>
        <MenuDropdown>
          {sports.sort().map(sport => (
              <MenuItem key={sport}>{sport}</MenuItem>
            )
          )}
        </MenuDropdown>
      </Menu>
    </div>
  )
}

