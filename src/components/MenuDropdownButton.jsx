import { useContext } from "react"
import { MenuContext } from "./Menu"

export default function MenuDropdownButton({children, ...rest}) {
  const {toggle} = useContext(MenuContext)

  return (
    <button className="menu--dropdown--button" onClick={toggle}>{children}</button>
  )
}