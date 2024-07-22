import { useEffect } from 'react'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'

function App() {
  useEffect(() => {
    document.title = "Resu-maker"
  }, []);

  return (
    <div>
      <title>Resu-maker</title>
      <link rel="stylesheet" href="/svg.css" />
      <link rel="stylesheet" href="/tailwind.css" />
      <Nav></Nav>
      <Home/>
    </div>
  )
}

export default App;
