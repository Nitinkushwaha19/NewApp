import "./App.css";
import Navbar from "./Component/Navbar";
import News from "./Component/News";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


const App = () => {

  const [mystyle, newstyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  })

  const [progress, setprogress] = useState(0)
  const [btnicon, setbtnicon] = useState("🌙")
  const [mode, setmode] = useState("light")

  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API

  let toggleStyle = () => {
    if (btnicon === "🌙") {
      newstyle({
        color: 'white',
        backgroundColor: 'black'
      })
      setbtnicon("🌞")
      setmode("dark")
      document.body.style.backgroundColor = "black"

    } else {
      newstyle({
        color: 'black',
        backgroundColor: 'white'
      })
      setbtnicon("🌙")
      setmode("white")
      document.body.style.backgroundColor = "white"
    }
  }

  const setProgress = (progress) => {
    setprogress(progress )
  }
  

  const handleSearch = (searchTerm) => {
    // Perform search or other actions with the search term
    console.log('Search term:', searchTerm);
  };


  return (
    <>
      <Router>
        <div>
          <Navbar
            btnicon={btnicon}
            mode={mode}
            toggleStyle={toggleStyle}
            onSearch={handleSearch}
          />
          <LoadingBar
            color="#f11946"
            progress={progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News apiKey={apiKey} setProgress={setProgress}
                  mystyle={mystyle}
                  key="general"
                  pageSize={pageSize}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News apiKey={apiKey} setProgress={setProgress}
                  mystyle={mystyle}
                  key="entertainment"
                  pageSize={pageSize}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/Health"
              element={
                <News apiKey={apiKey} setProgress={setProgress}
                  mystyle={mystyle}
                  key="Health"
                  pageSize={pageSize}
                  country="in"
                  category="Health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News apiKey={apiKey} setProgress={setProgress}
                  mystyle={mystyle}
                  key="science"
                  pageSize={pageSize}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News apiKey={apiKey} setProgress={setProgress}
                  mystyle={mystyle}
                  key="sports"
                  pageSize={pageSize}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News apiKey={apiKey} setProgress={setProgress}
                  mystyle={mystyle}
                  key="technology"
                  pageSize={pageSize}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );

}

export default App;
