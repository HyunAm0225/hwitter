import React, { useState, useEffect } from "react";
import AppRouter from "components/Router";
import { authService } from "fBase";
import Auth from "../routes/Auth";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing..."}
      <footer>&copy;Hwitter{new Date().getFullYear()}</footer>
    </>
  );
}

export default App;