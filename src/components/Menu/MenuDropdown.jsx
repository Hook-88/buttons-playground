import Toggle from "../Toggle/Index"

export default function MenuDropdown({ children }) {

  return (
    <Toggle.On>
      <ul className="menu--dropdown--container">
        {children}
      </ul>
    </Toggle.On>
  )
  
}