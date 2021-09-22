import React, { useEffect } from "react"
import logo from "./logo.svg"
import "./App.css"

function App() {
  const [data, setData] = React.useState(null)

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setData(data.message))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={
            "https://static.onecms.io/wp-content/uploads/sites/20/2019/10/trump-middle-finger-1-2000.jpg"
          }
          className="App-logo"
          alt="logo"
        />
        <p style={{ fontSize: "50px", fontFamily: "comic-sans" }}>
          {!data ? "Loading..." : data}
        </p>
      </header>
    </div>
  )
}

export default App
