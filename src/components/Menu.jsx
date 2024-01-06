import "./Menu.css"

export default function Menu() {

  return (
    <div className="menu--container">
      <button className="menu--button">Sports</button>
      <div className="menu--dropdown">
        <div className="menu--item">Footbal</div>
        <div className="menu--item">Ping Pong</div>
        <div className="menu--item">Tejo</div>
      </div>
    </div>
  )
}