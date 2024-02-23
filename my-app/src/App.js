import './App.css'
import Nav from './Nav'
import Login from './Login'

function App() {
  return (
    <div className="App">
      <Nav/>
      <div className="content">
        <Login/>
      </div>
    </div>
  )
}

export default App