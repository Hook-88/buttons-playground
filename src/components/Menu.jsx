import "./Menu.css"

export default function Menu({children}) {

  return (
    <div className="menu--container">
      {children}
      <div className="menu--dropdown">
        <div className="menu--item">Footbal</div>
        <div className="menu--item">Ping Pong</div>
        <div className="menu--item">Tejo</div>
      </div>
    </div>
  )
}