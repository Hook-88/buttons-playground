import './App.css'
import Menu from "./components/Menu/Index"

function App() {

  return (
    <>
      <Menu>
        <Menu.Button>Sports</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item>Tejo</Menu.Item>
          <Menu.Item>Bolirana</Menu.Item>
          <Menu.Item>Ping Pong</Menu.Item>
        </Menu.Dropdown>
      </Menu> 
    </>
  )
}

export default App
