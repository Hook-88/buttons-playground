import Toggle from "../Toggle/Index"

export default function MenuButton({ children }) {

  return (
    <Toggle.Button>
      <button className="menu--button">{children}</button>
    </Toggle.Button>  
  )
  
}