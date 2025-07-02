import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className="app-header">
        <h1>Welcome to React</h1>
        <p>This is a React application ready for Netlify deployment!</p>
        
        <div className="counter-section">
          <button onClick={() => setCount((count) => count + 1)}>
            Count is {count}
          </button>
          <p>Click the button to increment the counter</p>
        </div>

        <div className="features">
          <h2>Features</h2>
          <ul>
            <li>⚡ Built with Vite for fast development</li>
            <li>⚛️ React 18 with TypeScript</li>
            <li>🎨 Modern CSS styling</li>
            <li>🚀 Ready for Netlify deployment</li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default App