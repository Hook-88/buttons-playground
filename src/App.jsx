import { useState, createContext } from "react"

import "./App.css"
import Menu from "./components/Menu"
import MenuDropdownButton from "./components/MenuDropdownButton"
import MenuDropdown from "./components/MenuDropdown"
import MenuItem from "./components/MenuItem"
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import MenuButton from "./components/MenuButton"


export default function App() {
  const sports = ["Footbal", "Ping pong", "Tejo", "Bolirana"]

  return (
    <div>
      <Menu>
        <MenuButton>Sports</MenuButton>
        <MenuDropdownButton>
          <MdOutlineArrowDropDownCircle className="icon--dropdown"/>
        </MenuDropdownButton>
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

