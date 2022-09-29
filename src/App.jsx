import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './sass/main.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="title">
      App page <span className="title-sub">subtitle</span>
    </div>
  )
}

export default App
