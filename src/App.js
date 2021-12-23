import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);

  const pageSize = 8;
  const country = "in";
  const apiKey = process.env.REACT_APP_NEWS_API;

  return (
    <>
      <Router>
        <NavBar />

        <LoadingBar height={3} color="#f11946" progress={progress} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                country={country}
                category="general"
                badgeColor="light"
                apiKey={apiKey}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                pageSize={pageSize}
                country={country}
                category="business"
                badgeColor="dark"
                apiKey={apiKey}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                pageSize={pageSize}
                country={country}
                category="entertainment"
                badgeColor="info"
                apiKey={apiKey}
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                country={country}
                category="general"
                badgeColor="light"
                apiKey={apiKey}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key="health"
                pageSize={pageSize}
                country={country}
                category="health"
                badgeColor="warning"
                apiKey={apiKey}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key="science"
                pageSize={pageSize}
                country={country}
                category="science"
                badgeColor="success"
                apiKey={apiKey}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key="sports"
                pageSize={pageSize}
                country={country}
                category="sports"
                badgeColor="danger"
                apiKey={apiKey}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                pageSize={pageSize}
                country={country}
                category="technology"
                badgeColor="primary"
                apiKey={apiKey}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
